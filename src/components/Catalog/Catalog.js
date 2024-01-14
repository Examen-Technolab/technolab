import React from 'react';
import CardWithBtn from '../CardWithBtn/CardWithBtn';

import PlusButton from '../PlusButton/PlusButton';
import { appStore } from '../../stores/AppStore';
import { observer } from 'mobx-react-lite';
import { FormAddCard } from '../FormAddCard/FormAddCard';
import { cardsStore } from '../../stores/CardsStore';

export const Catalog = observer((props) => {

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
              popupContent={<FormAddCard />} /> : <></>
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