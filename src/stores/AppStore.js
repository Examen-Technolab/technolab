import { makeAutoObservable } from "mobx";

import api from "../utils/Api";

class AppStore {

  isLoggedIn = false; //флаг авторизации

  loading = false; //флаг загрузки, по которому показывается/скрывается прелоадер

  user = ''; //логин пользователя

  isAdmin = false; //права пользователя

  _countLoad = 0; //счетчик загрузок

  constructor() {
    makeAutoObservable(this);
  }

  //меняет флаг авторизации
  setLoading = (value) => {
    //считаем количество текущих загрузок и меняем стейт только, когда их количество равно нулю
    if (value) {
      this._countLoad++;
      this.loading = value;
    } else
      this._countLoad--;
    this.loading = this._countLoad ? this.loading : value;
  }

  _setIsLoggedIn = (value) => {
    this.isLoggedIn = value;
  }

  _setUser = (value) => {
    this.user = value;
  }

  _setIsAdmin = (value) => {
    this.isAdmin = value;
  }

  //задает стейты, связанные с пользователем
  setStates = ({ login, isAdmin, isLoggedIn }) => {
    this._setUser(login);
    this._setIsAdmin(isAdmin);
    this._setIsLoggedIn(isLoggedIn);
  }

  //осуществляет запрос к апи для входа и получения данных пользователя
  login = (login, password) => {
    this.setLoading(true);
    api.postLogin(login, password)
      .then((data) => {
        this.setStates({ ...data, isLoggedIn: true });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      })
  }

  //осуществляет запрос к апи для выхода
  logout = () => {
    this.setLoading(true);
    api.postLogout()
      .then((data) => {
        this._setIsLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      })
  }

  //делаем запрос к апи для проверки текущего токена
  checkUser = () => {
    this.setLoading(true);
    api.getCheck()
      .then((data) => {
        if (!data.message)
          this.setStates({ ...data, isLoggedIn: true });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      })
  }
}

export const appStore = new AppStore();