import { makeAutoObservable } from "mobx";

export class InputStore {

  value = '';

  class = 'form-input__input';

  errMessageClass = 'hidden';

  errMessage = 'Что-то пошло не так...';

  constructor(val = '') {
    makeAutoObservable(this);
    this.value = val;
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
