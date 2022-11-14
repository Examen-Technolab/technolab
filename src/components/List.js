import React from 'react';

function List(props) {
    return (
        <>
            <h2 className={`card__title text highlighted-text highlighted-text_level_${props.level}`}>{props.title}</h2>
            <ul className="card__list">
                {
                    props.list.map((item, index) => {
                        return (
                            <li className="text card__list-item" key={index.toString()}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <p className={`text text_italic card__list-item`}>{props.note}</p>
        </>
    );
}
export default List;