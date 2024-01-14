import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';

function CardWithBtn(props) {
  return (
    <Card type="with-btn" card={props.card}
      children={
        <Link to={`/catalog/${props.card.id}/kit`} className={`card__link-btn card__link-btn_level_${props.card.type} card-with-btn__btn`}>Узнать больше</Link>
      }
    />
  );
}
export default CardWithBtn;
