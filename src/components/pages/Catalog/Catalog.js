import React from 'react';
import { observer } from 'mobx-react-lite';

import CardWithBtn from '../../cards/CardWithBtn/CardWithBtn';
import PlusButton from '../../generic/PlusButton/PlusButton';
import { FormAddCard } from '../../forms/FormAddCard/FormAddCard';

import { appStore } from '../../../stores/AppStore';
import { cardsStore } from '../../../stores/CardsStore';
import { popupStore } from '../../../stores/PopupStore';

export const Catalog = observer((props) => {

  function onPlusBtnClick() {
    popupStore.open(<FormAddCard />);
  }

  React.useEffect(() => {

    if (!cardsStore.checkIsLoaded()) {
      cardsStore.getInitialCards();
    }
  }, []);

  return (
    <main className="section catalog">
      <h1 className="hidden"> Каталог </h1>
      <ul className="catalog__list">
        {
          appStore.isLoggedIn ?
            <PlusButton title="Добавить карточку."
              onClick={onPlusBtnClick} /> : <></>
        }
        {
          cardsStore.cards.map((card, index) => {
            return (
              <CardWithBtn key={'Card' + index.toString()} card={card} />
            )
          })
        }
      </ul>
    </main>
  );
});