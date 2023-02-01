import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Card from '../Card/Card';

function CardWithMenu(props) {
    return (
        <div className="card-with-menu">
            <Link to="/catalog" className="card-with-menu__link-back">
                <button className="card-with-menu__mini-back-btn" />
                <button className="card-with-menu__back-btn">
                    <p className="card-with-menu__back-btn-text">Назад</p>
                </button>
            </Link>
            <Card type="with-menu" link={props.link} level={props.level} img={props.img} title={props.title}
                article={props.article} price={props.price}
                children={
                    <>
                        <div className={`card-with-menu__pic card-with-menu__pic_level_${props.level}`}></div>
                        <div className="card-with-menu__navbar">
                            <NavLink to={`${props.url}/kit`} activeClassName={`card-with-menu__link-btn_active`} className={`card__link-btn card__link-btn_level_${props.level} card-with-menu__link-btn card-with-menu__link-btn_rotate`}>
                                <p className="card-with-menu__rotate-btn-text">Комплектация</p>
                            </NavLink>
                            <NavLink to={`${props.url}/specifications`} activeClassName={`card-with-menu__link-btn_active`} className={`card__link-btn card__link-btn_level_${props.level} card-with-menu__link-btn`}>Тех.<br /> характеристики</NavLink>
                            <NavLink to={`${props.url}/downloads`} activeClassName={`card-with-menu__link-btn_active`} className={`card__link-btn card__link-btn_level_${props.level} card-with-menu__link-btn card-with-menu__link-btn_rotate `}>
                                <p className="card-with-menu__rotate-btn-text">Загрузки</p>
                            </NavLink>
                        </div>
                    </>
                } />
        </div>
    );
}
export default CardWithMenu;
