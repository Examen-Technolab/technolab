import vexLogo from '../../../images/technology/logo-vex.png';
import vexTechnology from '../../../images/technology/logo-technology.png'
import { Product } from "./Product/Product";
import { technologyRFAdvantages } from "../../../utils/constants";
import cls from './Techology.module.css'
import Tile from '../../generic/Tile/Tile';
import { useEffect } from 'react';
import { cardsStore } from '../../../stores/CardsStore';


export const Techology = ()=>{

  
    useEffect(() => {
      if (!cardsStore.checkIsLoaded()) {
        cardsStore.getInitialCards();
      }
    }, []);
  


  return(
    
    <main className={"section " + cls.technology}>

    <section className={cls.header}>
      <Tile tileClass={cls.titleContainer}>
        <img className={cls.titleContainer__technologyImg} src={vexTechnology} alt="Логотип УрокТехнологии.рф" />
        <img className={cls.titleContainer__vexImg} src={vexLogo} alt="Логотип векс" />
        <h1 className={cls.titleContainer__title}>Образовательный проект</h1>
      </Tile>
      <Tile tileClass={cls.promoContainer}>
        <h2 className={"text text_uppercase " + cls.promoContainer__title}>УРОКТЕХНОЛОГИИ.РФ – доступная среда технологического развития школьников</h2>
        <p className={"text text_uppercase " + cls.promoContainer__text}>ООО «Экзамен-Технолаб» - участник проекта УРОКТЕХНОЛОГИИ.РФ Комплексный образовательный проект для инновационной реализации предметной области «Труд (техология)» в соответствии с ФГОС</p>
        <h2 className={"text text_uppercase " + cls.promoContainer__title}>Единая экосистема:</h2>
        <ul className = {cls.promoContainer__list}>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>Учебно-методический комплекс</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>Оборудование</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>Курсы повышения квалификации</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>Методическое сопровождение</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>Профориентация, олимпиады и соревнования</li>
        </ul>
        <div className={cls.promoContainer__triangles}></div>
      </Tile>
    </section>


    <section className={cls.advantages}>
      <ul className={cls.advantages__list}>
        {
          technologyRFAdvantages.map((item, ind)=>{
            return(
              <Tile key={'advantages' + ind} tileClass={cls.advantages__item +' ' + cls[`advantages__item_color_${item.color}`]}>
              <h2 className={"text text_uppercase " + cls.advantages__title}>{item.title}</h2>
              <p className={"text text_uppercase " + cls.advantages__text}>{item.text}</p>
            </Tile>
            )
          })
        }
      </ul>
    </section>

    <section>
      <Tile tileClass={cls.promoContainer}>
        <h2 className={"text text_uppercase " + cls.promoContainer__title}>Конструкторы VEX IQ в предметной области «Труд (технология)»</h2>
        <p className={"text text_uppercase " + cls.promoContainer__text}>
VEX IQ — это современный образовательный конструктор, который встраивается в реализацию предметной области и позволяет перевести обучение от теории к инженерной практике уже с 5 класса. Использование VEX IQ обеспечивает выполнение требований ФГОС и формирует у школьников технологическое и инженерное мышление через проектную и практическую деятельность.</p>
        <h2 className={"text text_uppercase " + cls.promoContainer__title}>Конструкторы VEX IQ позволяют:</h2>
        <ul className = {cls.promoContainer__list}>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>изучать основы робототехники и автоматизированных систем;</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>осваивать алгоритмизацию и программирование;</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>работать с механизмами, передачами, датчиками и приводами;</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>формировать навыки проектирования, сборки, тестирования и модернизации изделий;</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>реализовывать проектную и исследовательскую деятельность;</li>
          <li  className={"text text_uppercase " + cls.promoContainer__text}>готовить обучающихся к соревнованиям и олимпиадам по технологии.</li>
        </ul>
        
        <div className={cls.promoContainer__triangles + ' '+ cls.promoContainer__triangles_type_2}></div>
      </Tile>
    </section>


    <section className={cls.products}>
      <ul className={cls.products__list}>
        <li>
          <Product id={28} />
        </li>
        <li>
          <Product id={62} />
        </li>
      </ul>
    </section>
    
    <section className={cls.links}>
      <Tile tileClass={cls.links__tile}>
        
        <img className={cls.links__logo} src={vexTechnology} alt="Логотип УрокТехнологии.рф" />

        <ul className={cls.links__list}>
          <li>
            <p className={"text text_uppercase " + cls.links__name}>Пример урока и презентации (5, 6, 7 класса)</p>
            <a className={"link-button link-button_color_blue "+ cls.links__btn} target="__blank" href="/">Скачать</a>
          </li>
          <li>            
            <p className={"text text_uppercase " +cls.links__name}>Пример урока и презентации (9 класса)</p>
            <a className={"link-button link-button_color_blue "+ cls.links__btn} target="__blank" href="/">Скачать</a>
          </li>
        </ul>
      </Tile>
    </section>

    </main>
  )
}