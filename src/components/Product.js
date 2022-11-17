import React from 'react';
import { Switch, useRouteMatch, useParams, Route } from 'react-router-dom';
import CardWithMenu from './CardWithMenu';
import CardWithText from './CardWithText';
import cards from '../utils/cards';

function Product() {
    let { level } = useParams();
    let card = cards.find(card => card.level === level.toString());
    const { url, path } = useRouteMatch();
    return (
        <section className="product grid">
            <h1 className="title"> {card.title} </h1>
            <CardWithMenu url={url} level={level} img={card.img} title={card.title} article={card.article} price={card.price} />
            <Switch>
                <Route exact path={`${path}/kit`}>
                    <CardWithText list={card.kit} level={level} />
                </Route>
                <Route path={`${path}/specifications`}>
                    <CardWithText list={card.specifications} level={level} />
                </Route>
                <Route path={`${path}/downloads`}>
                    <CardWithText list={[{
                        title: "Раздел дополняется", list: [],
                        note: '',
                    }]} level={level} />
                </Route>
            </Switch>
        </section>
    );
}
export default Product;