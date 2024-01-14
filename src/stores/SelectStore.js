import { makeAutoObservable } from "mobx";

export class SelectStore {

  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (newValue) => {
    this.value = newValue;
  }
}
