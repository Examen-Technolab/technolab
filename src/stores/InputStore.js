import { makeAutoObservable } from "mobx";

export class InputStore {

  value = '';

  class = 'form-input__input';

  errMessageClass = 'hidden';

  errMessage = 'Что-то пошло не так...';

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (newValue) => {
    this.value = newValue;
  }

  setClass = (newClass) => {
    this.class = newClass;
  }

  setErrMessageClass = (newErrMessageClass) => {
    this.errMessageClass = newErrMessageClass;
  }

  setErrMessage = (newErrMessage) => {
    this.errMessage = newErrMessage;
  }
}
