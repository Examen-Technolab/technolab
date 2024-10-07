import React, { useState } from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { appStore } from '../../../../stores/AppStore';
import api from '../../../../utils/Api';
import { ProductItem } from '../ProductItem/ProductItem';


export const HiddenProduct = observer(() => {

  let { id } = useParams();

  const [card, setCard] = useState({ title: '', type: '' });

  React.useEffect(() => {
    setCard({ title: '', level: '' })
    appStore.setLoading(true);
    api.getHiddenCard(id)
      .then((cardData) => {
        setCard(cardData[0]);
        //cardsStore.setCurrentCard(cardData[0]);
      })
      .catch((err) => {
        console.log(err);
        //window.location.replace('/404');
      })
      .finally(() => {
        appStore.setLoading(false);
      })

  }, []);

  const { url, path } = useRouteMatch();

  return (
    !appStore.loading &&
    <ProductItem
      url={url}
      title={card.title}
      card={card}
      path={path}
      id={id}
      level={card.type}
    />
  );
})