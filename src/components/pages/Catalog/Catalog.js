import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import CardWithBtn from '../../cards/CardWithBtn/CardWithBtn';
import PlusButton from '../../generic/PlusButton/PlusButton';
import { FormAddCard } from '../../forms/FormAddCard/FormAddCard';

import { appStore } from '../../../stores/AppStore';
import { cardsStore } from '../../../stores/CardsStore';
import { popupStore } from '../../../stores/PopupStore';
import Select from '../../generic/Select/Select';
import { filterForCards, sortForCards } from '../../../utils/filterForCards';

export const Catalog = observer((props) => {
  const url = new URLSearchParams(window.location.search)

  const [filter, setFilter] = useState(url.get('filter') ?? '');
  const [sort, setSort] = useState(url.get('sort') ?? 0)

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
      <div className="catalog__filters">
        <Select
          defaultOption={filterForCards.find(item => item.value == filter).title}
          options={filterForCards}
          onClick={(v) => {
            setFilter(v);
            url.set('filter', v);
            window.history.replaceState(null, null, '?' + url.toString())
          }}
        />
        <Select
          defaultOption={sortForCards.find(item => item.value == sort).title}
          options={sortForCards}
          onClick={(v) => {
            setSort(v);
            url.set('sort', v);
            window.history.replaceState(null, null, '?' + url.toString())
          }} />
      </div>
      <ul className="catalog__list">
        {
          appStore.isLoggedIn &&
          <PlusButton title="Добавить карточку."
            onClick={onPlusBtnClick} />
        }
        {
          (cardsStore.getFilterCardList(filter, sort, appStore.isLoggedIn)).map((card, index) => {
            return (
              <CardWithBtn key={'Card' + index.toString()} card={card} />
            )
          })
        }
      </ul>
    </main>
  );
});