import React, { useState } from 'react';
import { Switch, useRouteMatch, useParams, Route } from 'react-router-dom';
import { CardWithMenu } from '../CardWithMenu/CardWithMenu';
import { CardWithText } from '../CardWithText/CardWithText';

import api from '../../utils/Api';
import { cardsStore } from '../../stores/CardsStore';
import { appStore } from '../../stores/AppStore';
import { observer } from 'mobx-react-lite';

export const Product = observer(() => {
  let { id } = useParams();

  React.useEffect(() => {
    if (cardsStore.checkIsLoaded()) {
      const card = cardsStore.cards.find(card => card.id == id);
      cardsStore.setCurrentCard(card);
    } else {
      appStore.setLoading(true);
      api.getCard(id)
        .then((cardData) => {
          cardsStore.setCurrentCard(cardData[0]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          appStore.setLoading(false);
        })
    }
  }, []);

  const { url, path } = useRouteMatch();

  return (
    <section className="section product">
      <h1 className="hidden"> {cardsStore.currentCard.title} </h1>
      <CardWithMenu url={url} card={cardsStore.currentCard} />
      <Switch>
        <Route exact path={`${path}/:tab`}>
          <CardWithText cardId={id} level={cardsStore.currentCard.type} />
        </Route>
        {/* <Route path={`${path}/specifications`}>
              <CardWithText list={specifications} level={card.type} />
            </Route> */}
        {/* <Route path={`${path}/downloads`}>
              <CardWithText list={[{
                title: "Раздел дополняется", list: [],
                note: '',
              }]} level={card.type} />
            </Route> */}
      </Switch>
    </section>
  );
})