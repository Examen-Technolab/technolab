import { makeAutoObservable } from "mobx";
import api from "../utils/Api";
import { appStore } from "./AppStore";
import { compareArr } from "../utils/functions";

const defaultTypes = [
  { title: 'Выберите тип карточки', value: 'default' }
];

class CardsStore {

  cards = [];

  currentCard = {};

  currentTab = '';

  types = defaultTypes;

  constructor() {
    makeAutoObservable(this);
  }

  checkIsLoaded = () => {
    return !!this.cards.length;
  }

  _setCards = (cardsData) => {
    this.cards = cardsData;
  }

  _setCard = (card, newCardData) => {
    for (let key in newCardData) {
      card[key] = newCardData[key];
    }
  }

  setCurrentTab = (tab) => {
    this.currentTab = tab;
  }

  setCurrentCard = (card) => {
    this.currentCard = card;
  }

  deleteCurrentCard = () => {
    this.currentCard = {};
    this.currentTab = '';
  }

  setTypes = (newTypes) => {
    this.types = [];
    newTypes.forEach(newType => {
      this.types.push({ title: newType.title, value: newType.type }) // можно в базе поменять type на value
    });
  }

  loadTypes = () => {
    if (compareArr(this.types, defaultTypes)) {
      appStore.setLoading(true);
      api.getData('cardTypes')
        .then((typesData) => {
          this.setTypes(typesData);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          appStore.setLoading(false);
        })
    }
  }

  getInitialCards = () => {
    appStore.setLoading(true);
    api.getInitialCards()
      .then((cardsData) => {
        this._setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
      })
  }

  addCard = (cardData, fin = () => { }) => {
    appStore.setLoading(true);
    api.postCard(cardData)
      .then((data) => {
        this._setCards([data[0], ...this.cards]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
        fin();
      })
  }

  editCard = (card, newCardData, fin = () => { }) => {
    appStore.setLoading(true);

    api.patchCard(card.id, newCardData)
      .then((data) => {
        this._setCard(card, newCardData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
        fin()
      })

  }

  // editCardById = (cardID, newCardData) => {
  //   const card = this.cards.find(item => item.id == cardID);
  //   this.editCard(card, newCardData);
  // }

  deleteCard = (cardID) => {
    appStore.setLoading(true);
    api.deleteCard(cardID)
      .then((data) => {
        let newList = [...this.cards];
        const index = newList.findIndex(item => item.id === cardID);
        newList.splice(index, 1);
        this._setCards(newList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
      })

  }

  setCardInfo = (cardID, listName, list) => {
    const card = this.cards.find(item => item.id == cardID);
    if (card) {
      card[listName] = list;
    } else this.currentCard[listName] = list;
  }

  getCardInfo = (listName) => {
    if (this.currentCard && (listName in this.currentCard)) {
      return this.currentCard[listName];
    } else return [];
  }

  getFilterCardList = () => {
    return this.cards.filter(card => !card.isHidden);
  }

}

export const cardsStore = new CardsStore();