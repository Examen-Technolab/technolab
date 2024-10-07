import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import api from '../../../utils/Api';
import { cardsStore } from '../../../stores/CardsStore';
import { appStore } from '../../../stores/AppStore';
import { ProductItem } from './ProductItem/ProductItem';

export const Product = observer(() => {
  let { id } = useParams();
  const { url, path } = useRouteMatch();

  React.useEffect(() => {
    cardsStore.setCurrentCard({ title: '', level: '' })
    if (cardsStore.checkIsLoaded()) {
      const card = cardsStore.cards.find(card => card.id == id);
      if (card)
        cardsStore.setCurrentCard(card);
      else {
        //window.location.replace('/404');
      }
    } else {
      appStore.setLoading(true);
      api.getCard(id)
        .then((cardData) => {
          cardsStore.setCurrentCard(cardData[0]);
        })
        .catch((err) => {
          console.log(err);
          //window.location.replace('/404');
        })
        .finally(() => {
          appStore.setLoading(false);
        })
    }
    return () => {

      cardsStore.setCurrentCard({ title: '', level: '' })
    }
  }, []);


  return (
    !appStore.loading &&
    <ProductItem
      url={url}
      title={cardsStore.currentCard.title}
      card={cardsStore.currentCard}
      path={path}
      id={id}
      level={cardsStore.currentCard.type}
    />
  );
})