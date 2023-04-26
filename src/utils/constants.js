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

export const logosObject = {
  "preliminary": preliminary,
  "elementary": elementary,
  "basic": basic,
  "professional": professional,
  "research": research,
  "aero": aero,
  "machines": machines,
  "undefined": defaultLogo
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
    level: 'preliminary',
    title: 'Предварительный уровень'
  },
  {
    level: 'elementary',
    title: 'Начальный уровень'
  },
  {
    level: 'basic',
    title: 'Базовый уровень'
  },
  {
    level: 'professional',
    title: 'Профессиональный уровень'
  },
  {
    level: 'research',
    title: 'Исследовательский уровень'
  },
  {
    level: 'aero',
    title: 'Аэро'
  },
]
