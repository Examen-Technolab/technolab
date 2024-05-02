import logoBridge from '../images/events/logo-bridge.svg'
import logoMmso from '../images/events/logo-mmso.svg'
import logoPitching from '../images/events/logo-pitching.svg'
import bridgeTable from '../images/events/table-bridge.png'
import pitchingTable from '../images/events/table-pitching.png'

const eventList = [
  {
    eventPage: 'pitching',
    logo: logoPitching,
    title: '«Pitching in» (2024-2025)',
    date: 'Пятница - суббота, 24-25 мая',
    lastDay: {
      year: 2024,
      month: 5,
      day: 25,
    },
    registration:
    {
      title: 'Регистрация',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJXCHtw-rzVG71lp1Kfi3i0Ck3mGj_mPFMWuQJUjTQyMtq6A/closedform',
      type: 'highlighted',
      linkTitle: 'Перейти к регистрации.'
    },
    // results:
    // {
    //   title: 'Результаты',
    //   link: 'https://vk.com/wall-125119296_422',
    //   type: 'highlighted',
    //   linkTitle: 'Открыть страницу ВК.'
    // },
    about: 'Соревнования по робототехнике для младшего и среднего школьных возрастов.',
    cardTitle: '«Pitching in» (2024-2025)',
    links: [
      {
        title: 'Правила игры',
        link: 'https://examen-technolab.ru/events/pitching/pitching-rules.pdf',
        linkTitle: 'Открыть pdf-файл.',
        type: 'guide',
      },
      {
        title: 'Описание поля',
        link: 'https://examen-technolab.ru/events/pitching/pitching-field.pdf',
        linkTitle: 'Открыть pdf-файл.',
        type: 'field',
      },
    ],
    description: [
      {
        title: 'Описание:',
        text: 'Соревнования VEX IQ Challenge PITCHING IN проводятся на поле размерами 1,8 х 2,4 м. Два робота совместно набирают очки в командных матчах длительностью шестьдесят (60) секунд в качестве Альянса. Команды также принимают участие в матче испытания навыков робота, где один робот набирает максимально возможное число очков. Этот матч содержит матч навыков управления, во время которого робот управляется оператором, и матч навыков программирования, во время которого робот автономно выполняет поставленную задачу.',
      },

      {
        title: 'Цель игры:',
        text: 'Набор очков, путем установки шариков на стойки, очистки загонов и подвешивания роботов.',
      },

      {
        title: 'Игровые элементы:',
        text: 'В игре участвуют двадцать два (22) оранжевых шарика.'
      },
      // {
      //   text: '1) Команды регистрируются на сайте robotevents.com на соответствующее мероприятие.',
      //   title: ''
      // },
      // {
      //   text: '2) Для участия в соревнованиях команде необходимо наличие игровых элементов (хотя бы одного комплекта на школу), стабильного интернет-соединения и веб камеры с хорошим качеством передаваемого видеопотока.',
      //   title: ''
      // },
    ],
    table: {
      title: 'Начисление очков:',
      src: pitchingTable
    }
  },
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
      src: bridgeTable
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