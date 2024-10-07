import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CardWithMenu } from '../../../cards/CardWithMenu/CardWithMenu';
import { CardWithText } from '../../../cards/CardWithText/CardWithText';


export const ProductItem = ({ url, title, card, path, id, level }) => {

  return (
    <section className="section product">
      <h1 className="hidden"> {title} </h1>
      <CardWithMenu url={url} card={card} />
      <Switch>
        <Route exact path={`${path}/:tab`}>
          <CardWithText cardId={id} level={level} />
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