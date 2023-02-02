import React from 'react';
import { Link } from 'react-router-dom';

function MainLink(props) {
    return (
        <Link title={props.title} to={`/catalog/${props.level}/kit`} className={`main-link main-link_level_${props.level} ${props.animation}`}></Link>
    );
}

export default MainLink;