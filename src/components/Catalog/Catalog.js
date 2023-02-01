import React from 'react';
import CardWithBtn from '../CardWithBtn/CardWithBtn';
import cards from '../../utils/cards';


function Catalog() {
    return (
        <main className="section">
            <h1 className="title"> Каталог </h1>
            <ul className="list catalog">
                {
                    cards.map((item, index) => {
                        const level = item.level.split('-')[0];
                        return (
                            <CardWithBtn key={'Card' + index.toString()} link={item.level} index={index} level={level} img={item.img} title={item.title} article={item.article} price={item.price} />
                        )
                    })
                }
            </ul>
        </main>
    );
}
export default Catalog;