import { makeAutoObservable } from "mobx";

class PopupStore {

  content = '';

  isVisible = false;

  keydown = '';

  constructor() {
    makeAutoObservable(this);
  }

  setContent = (newContent) => {
    this.content = newContent;
  }

  open = (content) => {
    this.isVisible = true;
    this.content = content;
  }

  close = () => {
    this.isVisible = false;
    this.content = '';
    this.keydown = ''
  }

  handleKeydown = (evt) => {
    switch (evt.key) {
      case 'Escape':
        this.close();
        break;
      default:
        this.keydown = evt.key
    }
  }

}

export const popupStore = new PopupStore();