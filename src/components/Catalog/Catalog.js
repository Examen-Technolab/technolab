import React from 'react';
import CardWithBtn from '../CardWithBtn/CardWithBtn';
import cards from '../../utils/cards';


function Catalog(props) {
  return (
    <main className="section catalog">
      <h1 className="hidden"> Каталог </h1>
      <ul className="catalog__list">
        {
          cards.map((item, index) => {
            const level = item.level.split('-')[0];
            return (
              <CardWithBtn setPopupIsVIsible={props.setPopupIsVIsible} setPopupContent={props.setPopupContent} key={'Card' + index.toString()} link={item.level} index={index} level={level} img={item.img} title={item.title} article={item.article} price={item.price} />
            )
          })
        }
      </ul>
    </main>
  );
}
export default Catalog;