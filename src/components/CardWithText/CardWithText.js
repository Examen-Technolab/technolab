import React from 'react';

import TileWithScroll from '../TileWithScroll/TileWithScroll';
import Description from "../Description/Description";

function CardWithText(props) {
  return (
    <TileWithScroll level={props.level} tileClass="card-with-text">
      {
        <>
          {
            props.list.map((item, index) => {
              return (
                <Description key={props.level + 'Description' + index.toString()} level={props.level} title={item.title} list={item.list} note={item.note} />
              )
            })
          }
          {
            props.imgTop ? <img className='card-with-text__img-top' alt={`Изображение набора ${props.level}`} src={props.imgTop} /> : <></>
          }
          {
            props.imgBot ? <img className='card-with-text__img-bot' alt={`Изображение набора ${props.level}`} src={props.imgBot} /> : <></>
          }
        </>
      }
    </TileWithScroll >
  );
}
export default CardWithText;