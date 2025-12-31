import preliminary from '../images/logo/logo-preliminary.svg';
import elementary from '../images/logo/logo-elementary.svg';
import basic from '../images/logo/logo-basic.svg';
import professional from '../images/logo/logo-professional.svg';
import research from '../images/logo/logo-research.svg';
import aero from '../images/logo/logo-aero.svg';
import machines from '../images/logo/logo-machines.svg';
import defaultLogo from '../images/logo/logo.svg';

import dobotIcon from '../images/main/dobot-icon.svg';
import dobotIconHover from '../images/main/dobot-icon-hover.svg';
import littleBitsIcon from '../images/main/ittle-bits-icon.svg';
import littleBitsIconHover from '../images/main/ittle-bits-icon-hover.svg';
import spheroIcon from '../images/main/sphero-icon.svg';
import spheroIconHover from '../images/main/sphero-icon-hover.svg';

export const colors = ["preliminary", "elementary", "basic", "research"]

export const logosObject = {
  "preliminary": preliminary,
  "elementary": elementary,
  "basic": basic,
  "professional": professional,
  "research": research,
  "aero": aero,
  "machines": machines,
  "default": defaultLogo
}

export const externalLinks = [
  {
    title: 'Dobot',
    link: 'https://dobot.ru',
    img: dobotIcon,
    hoverImg: dobotIconHover,
  },
  {
    title: 'LittleBits',
    link: 'http://littlebits.ru',
    img: littleBitsIcon,
    hoverImg: littleBitsIconHover,
  },
  {
    title: 'Sphero',
    link: 'https://sphero.ru',
    img: spheroIcon,
    hoverImg: spheroIconHover,
  },
]

export const modules = [
  {
    id: 1,
    level: 'preliminary',
    title: 'Предварительный уровень'
  },
  {
    id: 2,
    level: 'elementary',
    title: 'Начальный уровень'
  },
  {
    id: 3,
    level: 'basic',
    title: 'Базовый уровень'
  },
  {
    id: 8,
    level: 'professional',
    title: 'Профессиональный уровень'
  },
  {
    id: 9,
    level: 'research',
    title: 'Исследовательский уровень'
  },
  {
    id: 10,
    level: 'aero',
    title: 'Аэро'
  },
]

export const technobot = [
  {
    level: 'aero',
    title: 'Мощный',
    text: 'Встроенный микроконтроллер позволяет обрабатывать информацию без дополнительных устройств;'
  },
  {
    level: 'research',
    title: 'Компактный',
    text: 'Размеры модуля технического зрения позволяют с лёгкостью установить его в любой части конструкции робота;'
  },
  {
    level: 'elementary',
    title: 'Простой в освоении',
    text: 'Благодаря специальному ПО, первоначальная настройка модуля не будет занимать много времени.'
  },
]

export const vkLink = {
  text: 'Результаты',
  link: 'https://vk.com/examen_technolab',
  type: 'highlighted',
  linkTitle: 'Открыть ВК.'
}

const basicLink = "https://examen-technolab.ru/images/"


export const technologyRFAdvantages = [
  {
    title:'Школе',
    text: 'Обновление и поддержка МТБ, повышение качества обучения, поддержка инженерного мышления',
    color:'professional'
  }, 
  {
    title:'Педагогам',
    text: 'Методическая опора, повышение квалификации, сообщество единомышленников, участие в мероприятиях',
    color: 'default'
  }, 
  {
    title:'Учащимся',
    text: 'Реальные инженерные навыки, интересные уроки, ранняя профориентация, путь в технологические профессии',
    color: 'professional'
  }, 
  {
    title:'Региону',
    text: 'Доступная среда технологического развития, выполнение стратегических задач образования',
    color: 'default'
  }, 
]