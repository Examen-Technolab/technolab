import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

function CardWithBtn(props) {
    return (
        <Card type="with-btn" link={props.link} level={props.level} img={props.img}
            title={props.title} article={props.article} price={props.price}
            children={
                <Link to={`/catalog/${props.link}/kit`} className={`card__link-btn card__link-btn_level_${props.level} card-with-btn__btn`}>Узнать больше</Link>
            }
        />
    );
}
export default CardWithBtn;
