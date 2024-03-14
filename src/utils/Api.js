class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //проверяем статус ответа, если ок, то читаем JSON
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //отправляем get запрос для получения основных данных карточки по id
  getCard(id) {
    return fetch(`${this._baseUrl}/card?id=${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  patchCard(id, cardData) {
    return fetch(`${this._baseUrl}/card?id=${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(cardData)
    })
      .then(this._checkResponse)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/card?id=${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  postCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(cardData)
    })
      .then(this._checkResponse)
  }

  //отправляем get запрос для получения дополнительных данных карточки по id и вкладке
  getCardInfo(id, tab) {
    return fetch(`${this._baseUrl}/info?id=${id}&tab=${tab}`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  //отправляем get запрос для получения всех карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  //отправляем get запрос для получения данных по урлу param
  getData(param) {
    return fetch(`${this._baseUrl}/${param}`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  //Если переданный список пустой, то получаем новый с помощью get запроса по урлу name
  getList(list, setList, name, finallyFunc = () => { }) {
    if (!list.length) {
      this.getData(name)
        .then((newList) => {
          setList(newList);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          finallyFunc();
        })
    } else finallyFunc();
  }

  //отправляем post запрос для входа пользователя по логину и паролю
  //в теле json объект с полями 'login' и 'password'
  postLogin(login, password) {
    return fetch(`${this._baseUrl}/sign-in`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        'login': login,
        'password': password,
      })
    })
      .then(this._checkResponse)
  }

  //отправляем post запрос для выхода пользователя
  postLogout() {
    return fetch(`${this._baseUrl}/sign-out`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  //отправляем get запрос для проверки токена и получения данных пользователя
  getCheck() {
    return fetch(`${this._baseUrl}/check`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  postImage(file, name, dir, mainDir) {
    return fetch(`${this._baseUrl}/image?mainDir=${mainDir}&dir=${dir}&name=${name}`, {
      method: 'POST',
      credentials: 'include',
      //headers: this._headers,
      body: file,
    })
      .then(this._checkResponse)
  }

}
const api = new Api({
  baseUrl: "http://localhost:80/technolab",// 'https://api.examen-technolab.ru/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default api
