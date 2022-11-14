import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function CardWithBtn(props) {
    return (
        <li key={props.index.toString()} className={`card card_type_with-btn card_level_${props.level}`}>
            <Card level={props.level} img={props.img} title={props.title} article={props.article} price={props.price} />
            <Link to={`/catalog/${props.level}/kit`} className="card__link card__link_type_btn">
                <button className={`card__btn card__btn_level_${props.level}`}>
                    <p className="card__btn-text">Узнать больше</p>
                </button>
            </Link>
        </li>
    );
}
export default CardWithBtn;