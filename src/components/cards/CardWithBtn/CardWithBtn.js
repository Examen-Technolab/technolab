import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../Card/Card';

import style from './CardWithBtn.module.css'

function CardWithBtn(props) {
  return (
    <Card type="with-btn" card={props.card}
      children={
        <Link to={`/catalog/${props.card.id}/kit`} className={`card__link-btn card__link-btn_level_${props.card.type} ${style.btn}`}>Подробнее</Link>
      }
    />
  );
}
export default CardWithBtn;
