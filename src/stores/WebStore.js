import { makeAutoObservable } from "mobx";
import api from "../utils/Api";
import { appStore } from "./AppStore";
import { popupStore } from "./PopupStore";
import { Video } from "../components/pages/Web/Video/Video";


class WebStore {

  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  checkIsLoaded = () => {
    return !!this.list.length;
  }

  _setList = (data) => {
    this.list = data;
  }

  _setWeb = (id, newWeb) => {
    const newList = [...this.list];
    const index = newList.findIndex(item => item.id === id);
    for (let key in newWeb) {
      newList[index][key] = newWeb[key];
    }
    this._setSortList(newList);
  }

  _sortList = (newList) => {
    newList.forEach(item => {
      let flag = 2; // 0-регистрация 1-трансляция 2- видео
      item.webDate = new Date(1000, 1, 1, 0, 0);
      if (item.date) {
        let [date, time] = item.date.split(' - ');

        const [hours, minutes] = (time || '00:00').split(':');
        const [day, month, year] = (date || '01.01.1000').split('.');

        const webDate = new Date(year, month - 1, day, hours, minutes);
        item.webDate = webDate;

        const today = new Date();
        flag = (webDate.getTime() >= today.getTime()) ? 0 : 1;
        today.setHours(0, 0, 0, 0);
        webDate.setHours(0, 0, 0, 0);
        if (flag > 0)
          flag = (webDate.getTime() >= today.getTime()) ? 1 : 2;
      }

      if (item.video)
        flag = 2;

      switch (flag) {
        case 0: {
          item.status = 'registration';
          item.color = 'professional';
          item.linkTitle = 'записаться';
          item.sort = 1;
          break;
        }
        case 1: {
          item.status = 'online';
          item.color = 'professional';
          item.linkTitle = 'смотреть трансляцию';
          item.sort = 0;
          break;
        }
        default: {
          item.status = 'video';
          item.color = 'grey';
          item.linkTitle = item.video ? 'смотреть запись' : 'скоро появится запись';
          item.clickHandler = (e) => {
            e.preventDefault();
            if (item.video)
              popupStore.open(<Video jsx={item.video} />);
          }
          item.sort = 2;
          break;
        }
      }
    })
    newList = newList.sort((a, b) => {
      const i = (a.sort > 1 && b.sort > 1) ? -1 : 1;
      return a.sort - b.sort || i * (a.webDate.getTime() - b.webDate.getTime())
    })
    return newList;
  }

  _setSortList = (newList) => {
    this._setList(this._sortList(newList))
  }

  getInitialWebs = () => {
    appStore.setLoading(true);
    api.getList(this.list, this._setSortList, 'web',
      () => {
        appStore.setLoading(false);
      });
  }

  addWeb = (webData, fin = () => { }) => {
    appStore.setLoading(true);
    api.postWeb(webData)
      .then((data) => {
        this._setSortList([webData, ...this.list]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
        fin();
      })
  }

  editWeb = (webId, newWebData, fin = () => { }) => {
    appStore.setLoading(true);
    api.patchWeb(webId, newWebData)
      .then((data) => {
        this._setWeb(webId, newWebData);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
        fin()
      })
  }

  deleteWeb = (id, fin = () => { }) => {
    appStore.setLoading(true);
    api.deleteWeb(id)
      .then(() => {
        let newList = [...this.list];
        const index = newList.findIndex(item => item.id === id);
        newList.splice(index, 1);
        this._setSortList(newList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
        fin();
      })
  }

}

export const webStore = new WebStore();