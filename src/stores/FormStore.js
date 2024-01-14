import { makeAutoObservable } from "mobx";

export class FormStore {

  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (newValue) => {
    this.value = newValue;
  }
}
