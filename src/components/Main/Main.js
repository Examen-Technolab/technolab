import React from 'react';

import boardImg from '../../images/main/main-board.png';
import { modules, externalLinks } from '../../utils/constants';

import Tile from '../Tile/Tile';
import BrandLink from '../BrandLink/BrandLink';
import ModuleLink from '../ModuleLink/ModuleLink';

function Main() {

  return (
    <main className="main">
      <section className="main__banner">
        <h1 className="main__title">Робототехнические модули</h1>
        <a href="#main__info" className="link main__link">Узнать больше &#10230;</a>
        <ul className="main__navbar">
          {
            externalLinks.map(item => {
              return (
                <li key={item.title}>
                  <BrandLink hoverImg={item.hoverImg} link={item.link} title={item.title} img={item.img} />
                </li>
              )
            })
          }
        </ul>
      </section>
      <section id="main__info" className="section main__info">
        <Tile tileClass="main__tile-center">
          <p className="text"> <b className="highlighted-text">ООО &laquo;Экзамен-Технолаб&raquo;</b> предлагает Вашему вниманию новый образовательный продукт&nbsp;&mdash; набор специализированных образовательных робототехнических модулей для учебных классов изучения основ робототехники.</p>
        </Tile>
        <Tile tileClass="main__tile-top">
          <p className="text"> <b className="highlighted-text">Образовательные робототехнические модули</b> предназначены для освоения базовых навыков в&nbsp;области проектирования различных объектов, направлены на&nbsp;развитие у&nbsp;учащихся любознательности и&nbsp;интереса к&nbsp;технике, для освоения начальных навыков в&nbsp;области проектирования и программирования простейших роботов и&nbsp;робототехнических устройств.</p>
        </Tile>
        <Tile tileClass="main__tile-bot">
          <p className="text"> <b>Каждый модуль&nbsp;&mdash;</b> это продукт, разработанный специально для учебных целей, и&nbsp;предназначенный в&nbsp;первую очередь для применения в&nbsp;рамках программ начального и&nbsp;среднего образования во&nbsp;внеклассной работе с&nbsp;учащимися, а&nbsp;также для оснащения учебных технопарков.</p>
        </Tile>
        <ul className="main__list">
          {
            modules.map(item => {
              return (
                <li key={item.title + item.level}>
                  <ModuleLink linkTitle="Перейти на страницу модуля." level={item.level} title={item.title} />
                </li>
              )
            })
          }
        </ul>
        <img className="main__board-img " src={boardImg} alt="Формула модулей." />
      </section>
    </main>
  );
}
export default Main;