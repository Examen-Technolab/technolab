import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card } from '../Card/Card';
import { observer } from 'mobx-react-lite';

export const CardWithMenu = observer((props) => {
  const history = useHistory();
  const [stepBack, setStepBack] = React.useState(1);

  function handleNavClick() {
    setStepBack(stepBack + 1);
  }

  function handleBackClick() {
    history.go(-stepBack);
  }

  return (
    <div className="card-with-menu">
      <div onClick={handleBackClick} className="card-with-menu__link-back">
        <button type="button" className="card-with-menu__mini-back-btn" />
        <button type="button" className="card-with-menu__back-btn">
          <p className="card-with-menu__back-btn-text">Назад</p>
        </button>
      </div>
      <Card type="with-menu" card={props.card}
        children={
          <>
            <div className={`card-with-menu__pic card-with-menu__pic_level_${props.card.type}`}></div>
            <div className="card-with-menu__navbar">
              <NavLink onClick={handleNavClick} to={`${props.url}/kit`} activeClassName={`card-with-menu__link-btn_active`} className={`card__link-btn card__link-btn_level_${props.card.type} card-with-menu__link-btn card-with-menu__link-btn_rotate`}>
                <p className="card-with-menu__rotate-btn-text">Комплектация</p>
              </NavLink>
              <NavLink onClick={handleNavClick} to={`${props.url}/specifications`} activeClassName={`card-with-menu__link-btn_active`} className={`card__link-btn card__link-btn_level_${props.card.type} card-with-menu__link-btn`}>Тех.<br /> характеристики</NavLink>
              {/*<NavLink onClick={handleNavClick} to={`${props.url}/downloads`} activeClassName={`card-with-menu__link-btn_active`} className={`card__link-btn card__link-btn_level_${props.level} card-with-menu__link-btn card-with-menu__link-btn_rotate `}>
                                <p className="card-with-menu__rotate-btn-text">Загрузки</p>
                </NavLink>*/}
            </div>
          </>
        } />
    </div>
  );
})
