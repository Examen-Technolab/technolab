import React from 'react';

import Description from '../Description/Description';

function CardWithText(props) {
    return (
        <div className='card-with-text'>
            <ul className={`card-with-text__list card-with-text__list_level_${props.level}`}>
                {
                    props.list.map((item, index) => {
                        return (
                            <Description key={props.level + 'Description' + index.toString()} level={props.level} title={item.title} list={item.list} note={item.note} />
                        )
                    })
                }
                {(props.imgTop || props.imgBot) ? <>
                    <img className='card-with-text__img-top' alt={`Изображение набора ${props.level}`} src={props.imgTop} />
                    <img className='card-with-text__img-bot' alt={`Изображение набора ${props.level}`} src={props.imgBot} />
                </> : ''}
            </ul>
        </div>
    );
}
export default CardWithText;