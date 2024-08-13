import React from 'react';

function Description(props) {
  return (
    <div className={`description description_level_${props.level}`}>
      <h2 className={`text text_uppercase description__title highlighted-text highlighted-text_level_${props.level}`}>{props.title}</h2>
      <ul className="description__list">
        {
          props.list.map((item, index) => {
            return item &&
              (<li className="description__list-item" key={index.toString() + Math.random().toString(16).slice(2)}>
                {item}
              </li>)
          })
        }
      </ul>
      <p className="description__note">{props.note}</p>
    </div>
  );

}
export default Description;