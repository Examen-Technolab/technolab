import { makeAutoObservable } from "mobx";
import api from "../utils/Api";
import { appStore } from "./AppStore";
import { compareArr, priceToNumber } from "../utils/functions";

const defaultTypes = [
  { title: 'Выберите тип карточки', value: 'default' }
];

const defaultFilters = [
  { title: 'Показать все', value: '' }
];

class CardsStore {

  cards = [];

  currentCard = {};

  currentTab = '';

  types = defaultTypes;

  filters = defaultFilters;

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
      this.types.push(newType) // можно в базе поменять type на value
      this.filters.push(newType);
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

  getFilterCardList = (type, sort, isAdmin) => {
    let fCards = this.cards.filter(card => (card.type === type || !type) && (!card.isHidden || isAdmin));
    if (sort) {
      fCards.sort((a, b) => {
        switch (+sort) {
          case 1:
            return (priceToNumber(a.price) - priceToNumber(b.price));
          case 2:
            return (priceToNumber(b.price) - priceToNumber(a.price));
          default: return 0;
        }
      })
    }
    return fCards;
  }

  getFilters = () => {
    console.log('this', this.filters[0].value)
    return this.filters;
  }

}

export const cardsStore = new CardsStore();