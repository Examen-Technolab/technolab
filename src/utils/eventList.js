import logoBridge from '../images/events/logo-bridge.svg'
import logoMmso from '../images/events/logo-mmso.svg'

const eventList = [
  {
    eventPage: 'bridge',
    logo: logoBridge,
    title: 'Тechnolab challenge “Bridge” - 2023.',
    date: 'Четверг-пятница, 11-12 мая',
    lastDay: {
      year: 2023,
      month: 5,
      day: 12,
    },
    registration:
    {
      title: 'Регистрация',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJXCHtw-rzVG71lp1Kfi3i0Ck3mGj_mPFMWuQJUjTQyMtq6A/closedform',
      type: 'highlighted',
      linkTitle: 'Перейти к регистрации.'
    },
    results:
    {
      title: 'Результаты',
      link: 'https://vk.com/wall-125119296_422',
      type: 'highlighted',
      linkTitle: 'Открыть страницу ВК.'
    },
    about: 'Соревнования по робототехнике для младшего и среднего школьных возрастов на основе регламентов соревнований VEX IQ Challenge crossover.',
    cardTitle: '«Bridge» (2023-2024)',
    links: [
      {
        title: 'Соревновательная продукция',
        link: 'https://examen-technolab.ru/catalog/elementary/kit',
        linkTitle: 'Перейти на страницу товара.',
        type: 'products',
      },
      {
        title: 'Руководство по игре',
        link: 'https://examen-technolab.ru/events/technolab_bridge/technolab_bridge_rules.pdf',
        linkTitle: 'Открыть pdf-файл.',
        type: 'guide',
      },
      {
        title: 'Описание поля',
        link: 'https://examen-technolab.ru/events/technolab_bridge/bridge_field.pdf',
        linkTitle: 'Открыть pdf-файл.',
        type: 'field',
      },
    ],
    description: [
      {
        title: 'Описание:',
        text: 'Соревнования Technolab challenge bridge проходят на прямоугольном поле 246x124 см. Два робота участвуют в Командных матчах в качестве альянса на протяжении шестидесяти (60) секунд, работая вместе для набора очков. Кроме того, команды участвуют в двух дополнительных состязаниях: Матчи мастерства управления, во время которых робот старается набрать как можно больше очков под управлением оператора, и Матчи автономного мастерства, во время которых робот старается самостоятельно набрать очки без помощи оператора. Целью игры является набор очков посредством занесения хексолов в специальные зоны, парковке или балансировке роботов на мосту.',
      },

      {
        title: 'Цель игры:',
        text: 'Набор очков, путем установки доставки хексолов в специальные зоны для набора очков, зачётные зоны и/или парковке робота на мосту.',
      },

      {
        title: 'Игровые элементы:',
        text: 'Для набора очков существуют двадцать восемь (28) хексолов, две (2)зачётные зоны, шестнадцать (16) низких зон для набора очков, двенадцать (12) высоких зон для набора очков и один (1) мост для парковки роботов.',
      },
    ],
    table: {
      title: 'Начисление очков:',
    }
  },
  {
    eventPage: '',
    logo: logoMmso,
    title: 'ММСО.EXPO-2023',
    date: 'Четверг-пятница, 23-24 марта.',
    results:
    {
      title: 'Фотоотчет',
      link: 'https://vk.com/wall-125119296_418',
      type: 'highlighted',
      linkTitle: 'Открыть страницу ВК.'
    },
    lastDay: {
      year: 2023,
      month: 3,
      day: 24,
    },
    about: 'Выставочное пространство ММСО.EXPO-2023 объединит самые передовые решения как для учреждений образования, так и для индивидуальных потребителей – педагогов, учащихся и их родителей.'
  },
];

export default eventList;