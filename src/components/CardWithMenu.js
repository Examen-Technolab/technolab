import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Card from './Card';

function CardWithMenu(props) {
    return (
        <div>
            <Link to="/catalog" className="card__link card__link_type_back">
                <button className="card__back-btn__triangle" />
                <button className="card__back-btn">
                    <p className="card__btn-text card__btn-text_type_big">Назад</p>
                </button>
            </Link>
            <div className={`card card_type_with-menu card_level_${props.level}`}>
                <Card level={props.level} img={props.img} title={props.title} article={props.article} price={props.price} />
                {
                    <div className={`card__pic card__pic_level_${props.level}`}></div>
                }
                <div className="card__navbar">
                    <NavLink to={`${props.url}/kit`} activeClassName="card__link_type_active" className="card__link">
                        <button className={`card__btn card__btn_rotate card__btn_level_${props.level}`}>
                            <p className="card__btn-text  card__btn-text_type_rotate">Комплектация</p>
                        </button>
                    </NavLink>
                    <NavLink to={`${props.url}/specifications`} activeClassName="card__link_type_active" className="card__link">
                        <button className={`card__btn card__btn_level_${props.level}`}>
                            <p className="card__btn-text">Тех. характеристики</p>
                        </button>
                    </NavLink>
                    <NavLink to={`${props.url}/downloads`} activeClassName="card__link_type_active" className="card__link">
                        <button className={`card__btn card__btn_rotate card__btn_level_${props.level}`}>
                            <p className="card__btn-text card__btn-text_type_rotate">Загрузки</p>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default CardWithMenu;