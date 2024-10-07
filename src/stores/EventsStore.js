import { makeAutoObservable } from "mobx";

import api from "../utils/Api";

class EventsStore {

  //isLoggedIn = false; //флаг авторизации

  //loading = false; //флаг загрузки, по которому показывается/скрывается прелоадер

  //user = ''; //логин пользователя

  //isAdmin = false; //права пользователя

  //level = 'default'; // уровень (цвет)

  // _countLoad = 0; //счетчик загрузок

  events = [];
  upcoming = [];
  archive = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEvents = (newList) => {
    this.events = newList;
  }

  setUpcoming = (newList) => {
    this.upcoming = newList;
  }

  setArchive = (newList) => {
    this.archive = newList;
  }

  addEvent = (newValue) => {
    const list = [...this.events];
    list.push(newValue);
    this.events = list;
    this.formLists(list);
  }

  editEvent = (newValue, id) => {
    const list = [...this.events];
    const index = list.findIndex((item) => item.id === id);
    list[index] = newValue;
    this.events = list;
  }

  deleteEvent = (id) => {
    const list = [...this.events];
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    this.events = list;
  }

  getDate = (item) => {
    //переводит в полную дату объект с полями year, month, day
    const lastDay = new Date();
    let dateObj = item.lastDay;
    if (typeof dateObj === 'string') {
      const split = dateObj.split('.');
      dateObj = {
        year: split[2],
        month: split[1],
        day: split[0]
      }
    }
    lastDay.setFullYear(dateObj.year, dateObj.month - 1, dateObj.day);
    return lastDay;
  }

  formatEvents = (list) => {
    //делит список на архив и предстоящие события, возвращает массив двух массивов
    //архив отсортирован по убыванию даты, а предстоящие по возрастанию даты
    const today = new Date();

    //сортировка по дате окончания
    list.sort((x, y) => this.getDate(x) - this.getDate(y));

    //поиск индекса границы между архивом и предстоящими событиями
    let midIndex;

    //если индекс не найден, то не делим, иначе делим

    if (today.getTime() > this.getDate(list[list.length - 1]).getTime()) {
      midIndex = list.length;
    } else if (today.getTime() <= this.getDate(list[0]).getTime()) {
      midIndex = 0;
    } else {
      midIndex = list.findIndex((item) => {
        const lastDay = this.getDate(item);
        return today.getTime() <= lastDay.getTime()
      })
    }

    for (let i = 0; i < midIndex; i++) {
      list[i].isArchived = true;
    }

    this.setEvents([...list.slice(midIndex), ...list.slice(0, midIndex).reverse()]);
  }

  formLists = (list = []) => {
    const today = new Date();
    let newList = list.filter((x) => today.getFullYear() === this.getDate(x).getFullYear());
    this.setEvents(newList);
    if (newList.length) {
      this.formatEvents(newList);
    }
    return newList
  }

}

export const eventsStore = new EventsStore();