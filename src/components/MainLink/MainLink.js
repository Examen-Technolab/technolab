import React from 'react';
import { NavLink } from 'react-router-dom';

function MainLink(props) {
    return (
        <NavLink to={`${props.url}/${props.level}`} activeClassName={`main__active-link_level_${props.level}-active`} className={`main-link main-link_level_${props.level} ${props.animation}`}>{props.text}</NavLink>
    );
}

export default MainLink;