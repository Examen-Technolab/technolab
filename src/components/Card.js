import React from 'react';

function Card(props) {
    return (
        <>
            <img className={`card__img`} alt={`Изображение набора ${props.title}`} src={props.img} />
            <h2 className="text card__title">{props.title}</h2>
            <p className="text card__article">Артикул: {props.article}</p>
            <p className={`text card__price highlighted-text highlighted-text_level_${props.level}`}>Цена: {props.price} руб.</p>
        </>
    );
}
export default Card;