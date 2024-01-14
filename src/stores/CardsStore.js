import { makeAutoObservable } from "mobx";
import api from "../utils/Api";
import { appStore } from "./AppStore";

class CardsStore {

  cards = [];

  types = [
    { title: 'Выберите тип карточки', value: 'default' }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  checkIsLoaded = () => {
    return !!this.cards.length;
  }

  setCards = (cardsData) => {
    this.cards = cardsData;
  }

  setTypes = (newTypes) => {
    this.types = [];
    newTypes.forEach(newType => {
      this.types.push({ title: newType.title, value: newType.type }) // можно в базе поменять type на value
    });
  }

  loadTypes = () => {
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

  getInitialCards = () => {
    appStore.setLoading(true);
    api.getInitialCards()
      .then((cardsData) => {
        this.setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
      })
  }

  addCard = (cardData) => {
    appStore.setLoading(true);
    api.postCard(cardData)
      .then((data) => {
        this.cards.unshift(cardData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
      })
  }

  editCard = (card, newCardData) => {
    api.patchCard(card.id, newCardData)
      .then((data) => {
        for (let key in newCardData) {
          card[key] = newCardData[key];
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        appStore.setLoading(false);
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
        const index = this.cards.findIndex(item => item.id === cardID);
        this.cards.splice(index, 1);
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
    card[listName] = list;
  }

  getCardInfo = (cardID, listName) => {
    const card = this.cards.find(item => item.id == cardID);
    if (card && (listName in card)) {
      return card[listName];
    } else return [];
  }

}

export const cardsStore = new CardsStore();