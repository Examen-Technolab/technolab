import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { cardsStore } from '../../../../stores/CardsStore';
import { appStore } from '../../../../stores/AppStore';
import api from '../../../../utils/Api';
import { ProductForTech } from './ProductForTech/ProductForTech';


export const Product = observer(({id}) => {
  let { url, path } = useRouteMatch();

  const [cardData, setCardData] = useState();

  React.useEffect(() => {
    if (cardsStore.checkIsLoaded()) {
      const card = cardsStore.cards.find(card => card.id == id);
      if (card)
        setCardData(card);
      else {
        //window.location.replace('/404');
      }
    } else {
      appStore.setLoading(true);
      api.getCard(id)
        .then((cardData) => {
          setCardData(cardData[0]);
        })
        .catch((err) => {
          console.log(err);
          //window.location.replace('/404');
        })
        .finally(() => {
          appStore.setLoading(false);
        })
    }
  }, []);


  return (
    !!cardData &&
    <ProductForTech
      url={url}
      title={cardData.title}
      card={cardData}
      path={path}
      id={id}
      level={cardData.type}
    />
  );
})