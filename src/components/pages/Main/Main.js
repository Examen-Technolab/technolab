import React from 'react';

import modulesImg from '../../../images/main/main-modules.png';
import technobotImg from '../../../images/main/technobot-poster.jpg';
import technobotVideo from '../../../video/technobot.mp4';
import { modules, technobot, externalLinks } from '../../../utils/constants';

import Tile from '../../tiles/Tile/Tile';
import BrandLink from '../../BrandLink/BrandLink';
import ModuleLink from '../../ModuleLink/ModuleLink';
import StickySection from '../../StickySection/StickySection';
import Banner from '../../Banner/Banner';

import video from '../../../video/technobot-promo.mp4';


function Main(props) {

  return (
    <main className="main">
      <h1 className="hidden">Главная</h1>
      <video className="main__video" src={video} autoPlay muted loop ></video>

      <div className="main__back"></div>
      <Banner
        list={[
          {
            title: 'Робототехнические модули',
            about: 'Набор специализированных образовательных робототехнических модулей для учебных классов изучения основ робототехники.',
            link: {
              link: '#modules',
              text: 'Узнать больше',
            }
          },
          {
            title: 'СтемБот 1.0',
            about: 'Российское робототехническое решение, собравшее передовые технологии и знания в области конструирования и робототехники.',
            link: {
              link: '#technobot',
              text: 'Узнать больше',
            }
          },
        ]}
      >
        <ul className="main__linkbar">
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
      </Banner>

      <StickySection idName="technobot"
        scrollY={props.scrollY}
        titleTile={<p className="text"><b className="text_uppercase">&laquo;СтемБот 1.0&raquo;</b>&nbsp;&mdash; российское робототехническое решение, собравшее передовые технологии и знания в области конструирования и робототехники.</p>}
        leftTile={<p className="text"> <b className="highlighted-text">Набор «СтемБот 1.0»,</b> разработанный компанией «Экзамен-Технолаб» в сотрудничестве с ведущими техническими вузами России, представляет собой комплект компонентов для создания и программирования роботов. </p>}
        rightTile={<p className="text"> За основу архитектуры робототехнического контроллера взята платформа Arduino, которая позволяет работать с большинством устройств по популярным протоколам передачи данных.</p>}
        list=
        {
          technobot.map(item => {
            return (
              <li key={item.title}>
                <Tile level={item.level} link={item.link ? item.link.link : undefined} linkTitle={item.link ? item.link.linkTitle : undefined} target='_self'>
                  <h3 className="text text_uppercase">‣ {item.title}</h3>
                  <p className="text">{item.text}</p>
                </Tile>
              </li>
            )
          })
        }
        listLink={{
          title: 'Узнать больше',
          link: '/catalog/technobot/kit',
          linkTitle: 'Перейти в каталог',
        }}
        poster={technobotImg}
        media={technobotVideo}
        altMedia="СтемБот."
      />

      <StickySection idName="modules"
        scrollY={props.scrollY}
        titleTile={<p className="text"> <b className="text_uppercase">&laquo;Робототехнические модули&raquo;</b>&nbsp;&mdash; новый образовательный продукт для учебных классов изучения основ робототехники.</p>}
        leftTile={<p className="text"> <b className="highlighted-text">Образовательные робототехнические модули</b> предназначены для освоения базовых навыков в&nbsp;области проектирования различных объектов, направлены на&nbsp;развитие у&nbsp;учащихся любознательности и&nbsp;интереса к&nbsp;технике, для освоения начальных навыков в&nbsp;области проектирования и программирования простейших роботов и&nbsp;робототехнических устройств.</p>}
        rightTile={<p className="text"> <b>Каждый модуль&nbsp;&mdash;</b> это продукт, разработанный специально для учебных целей, и&nbsp;предназначенный в&nbsp;первую очередь для применения в&nbsp;рамках программ начального и&nbsp;среднего образования во&nbsp;внеклассной работе с&nbsp;учащимися, а&nbsp;также для оснащения учебных технопарков.</p>}
        list=
        {
          modules.map(item => {
            return (
              <li key={item.title}>
                <ModuleLink linkTitle="Перейти на страницу модуля." level={item.level} title={item.title} />
              </li>
            )
          })
        }
        listTitle={{
          title: 'Подробнее о каждом модуле:',
        }}
        media={modulesImg}
        altMedia="Формула модулей."
      />
      {/*
      <Banner
        list={[
          {
            title: 'Ознакомьтесь со всеми продуктами',
            about: '',
            link: {
              link: '/catalog',
              text: 'Перейти в каталог',
            }
          },
        ]}
      >

      </Banner>*/}

    </main>
  );
}
export default Main;