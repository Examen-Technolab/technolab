import logoBridge from '../images/events/logo-bridge.svg'
import logoMmso from '../images/events/logo-mmso.svg'
import logoPitching from '../images/events/logo-pitching.svg'
import bridgeTable from '../images/events/table-bridge.png'
import pitchingTable from '../images/events/table-pitching.png'

const eventList = [
  {
    id: 10,
    code: 'pitching2',
    withPage: 1,
    logo: logoPitching,
    title: '«Pitching in2» (2024-2025)',
    date: '10.10.24',
    lastDay: '10.10.2024',
    isLinkResult: false,
    btnText: 'Регистрация',
    btnLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdJXCHtw-rzVG71lp1Kfi3i0Ck3mGj_mPFMWuQJUjTQyMtq6A/closedform',

    about: 'Соревнования по робототехнике для младшего и среднего школьных возрастов.',
    //cardTitle: '«Pitching in» (2024-2025)',
    links: [
      {
        title: 'Правила игры',
        body: 'https://examen-technolab.ru/events/pitching/pitching-rules.pdf',
      },
      {
        title: 'Описание поля',
        body: 'https://examen-technolab.ru/events/pitching/pitching-field.pdf',
      },
    ],
    description: [
      {
        title: 'Описание:',
        body: 'Соревнования VEX IQ Challenge PITCHING IN проводятся на поле размерами 1,8 х 2,4 м. Два робота совместно набирают очки в командных матчах длительностью шестьдесят (60) секунд в качестве Альянса. Команды также принимают участие в матче испытания навыков робота, где один робот набирает максимально возможное число очков. Этот матч содержит матч навыков управления, во время которого робот управляется оператором, и матч навыков программирования, во время которого робот автономно выполняет поставленную задачу.',
      },

      {
        title: 'Цель игры:',
        body: 'Набор очков, путем установки шариков на стойки, очистки загонов и подвешивания роботов.',
      },

      {
        title: 'Игровые элементы:',
        body: 'В игре участвуют двадцать два (22) оранжевых шарика.'
      },
    ],
    // table: {
    //   title: 'Начисление очков:',
    //   src: pitchingTable
    // }
  },

  {
    id: 20,
    code: 'pitching',
    withPage: 1,
    logo: logoPitching,
    title: '«Pitching in» (2024-2025)',
    date: '5.10.24',
    lastDay: '05.10.2024',
    isLinkResult: false,
    btnText: 'Регистрация',
    btnLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdJXCHtw-rzVG71lp1Kfi3i0Ck3mGj_mPFMWuQJUjTQyMtq6A/closedform',

    about: 'Соревнования по робототехнике для младшего и среднего школьных возрастов.',
    //cardTitle: '«Pitching in» (2024-2025)',
    links: [
      {
        title: 'Правила игры',
        body: 'https://examen-technolab.ru/events/pitching/pitching-rules.pdf',
      },
      {
        title: 'Описание поля',
        body: 'https://examen-technolab.ru/events/pitching/pitching-field.pdf',
      },
    ],
    description: [
      {
        title: 'Описание:',
        body: 'Соревнования VEX IQ Challenge PITCHING IN проводятся на поле размерами 1,8 х 2,4 м. Два робота совместно набирают очки в командных матчах длительностью шестьдесят (60) секунд в качестве Альянса. Команды также принимают участие в матче испытания навыков робота, где один робот набирает максимально возможное число очков. Этот матч содержит матч навыков управления, во время которого робот управляется оператором, и матч навыков программирования, во время которого робот автономно выполняет поставленную задачу.',
      },

      {
        title: 'Цель игры:',
        body: 'Набор очков, путем установки шариков на стойки, очистки загонов и подвешивания роботов.',
      },

      {
        title: 'Игровые элементы:',
        body: 'В игре участвуют двадцать два (22) оранжевых шарика.'
      },
    ],
    // table: {
    //   title: 'Начисление очков:',
    //   src: pitchingTable
    // }
  },

];

export default eventList;