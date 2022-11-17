import React from 'react';
import List from './List';

function CardWithText(props) {
    return (
        <div className='card card_type_with-text'>
            <div className={`card__text card__text_level_${props.level}`}>
                {
                    props.list.map((item, index) => {
                        return (
                            <List key={index.toString()} level={props.level} title={item.title} list={item.list} note={item.note} />
                        )
                    })
                }
            </div>
        </div>
    );
}
export default CardWithText;