import React from 'react';

function Description(props) {
    if (props.title) {
        return (
            <li className={`description description_level_${props.level}`}>
                <h2 className={`text description__title highlighted-text highlighted-text_level_${props.level}`}>{props.title}</h2>
                <ul className="description__list">
                    {
                        props.list.map((item, index) => {
                            return (
                                <li className="text description__list-item" key={index.toString() + Math.random().toString(16).slice(2)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="description__note">{props.note}</p>
            </li>
        );
    } else return (
        <li className={`description description_level_${props.level}`}>
            <p className="description__note">{props.note}</p>
        </li>
    )

}
export default Description;