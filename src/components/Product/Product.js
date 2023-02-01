import React from 'react';
import { Switch, useRouteMatch, useParams, Route } from 'react-router-dom';
import CardWithMenu from '../CardWithMenu/CardWithMenu';
import CardWithText from '../CardWithText/CardWithText';
import cards from '../../utils/cards';

function Product() {
    let { level } = useParams();
    let card = cards.find(card => card.level === level.toString());
    const { url, path } = useRouteMatch();
    const cardLevel = level.split('-')[0];

    return (
        <section className="section product">
            <h1 className="title"> {card.title} </h1>
            <CardWithMenu url={url} link={level} level={cardLevel} img={card.img} title={card.title} article={card.article} price={card.price} />
            <Switch>
                <Route exact path={`${path}/kit`}>
                    <CardWithText list={card.kit} level={cardLevel} imgTop={card.imgTop} imgBot={card.imgBot} />
                </Route>
                <Route path={`${path}/specifications`}>
                    <CardWithText list={card.specifications} level={cardLevel} />
                </Route>
                <Route path={`${path}/downloads`}>
                    <CardWithText list={[{
                        title: "Раздел дополняется", list: [],
                        note: '',
                    }]} level={cardLevel} />
                </Route>
            </Switch>
        </section>
    );
}
export default Product;