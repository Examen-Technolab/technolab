import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../Card/Card';

import style from './CardWithBtn.module.css'

function CardWithBtn(props) {

  const styleClass = `card__link-btn card__link-btn_level_${props.card.type} ${style.btn}`;
  let link = `/${props.card.isHidden ? 'hidden' : 'catalog'}/${props.card.id}`;
  if (!props.card.isHidden)
    link = link + '/kit';

  return (
    <Card type="with-btn" card={props.card}
      children={
        <Link to={link} className={styleClass}>Подробнее</Link>
      }
    />
  );
}
export default CardWithBtn;
