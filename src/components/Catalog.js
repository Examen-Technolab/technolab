import React from 'react';
import CardWithBtn from './CardWithBtn';
import cards from '../utils/cards';


function Catalog() {
    return (
        <section className="catalog">
            <h1 className="title"> Каталог </h1>
            <ul className="list grid">
                {
                    cards.map((item, index) => {
                        return (
                            <CardWithBtn key={index.toString()} index={index} level={item.level} img={item.img} title={item.title} article={item.article} price={item.price} />
                        )
                    })
                }
            </ul>
        </section>
    );
}
export default Catalog;