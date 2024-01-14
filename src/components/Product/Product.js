import React, { useState } from 'react';
import { Switch, useRouteMatch, useParams, Route } from 'react-router-dom';
import CardWithMenu from '../CardWithMenu/CardWithMenu';
import CardWithText from '../CardWithText/CardWithText';

import api from '../../utils/Api';
import { cardsStore } from '../../stores/CardsStore';
import { appStore } from '../../stores/AppStore';

function Product() {
  let { id } = useParams();
  const [card, setCard] = useState({});

  React.useEffect(() => {
    if (cardsStore.cards.length) {
      setCard(cardsStore.cards.find(card => card.id == id));
    } else {
      appStore.setLoading(true);
      api.getCard(id)
        .then((cardData) => {
          setCard(cardData[0]);
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
      <h1 className="hidden"> {card.title} </h1>
      <CardWithMenu url={url} card={card} />
      <Switch>
        <Route exact path={`${path}/:tab`}>
          <CardWithText cardId={id} level={card.type} />
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
}
export default Product;