//картинки аэро
import aero from '../images/cards/aero.png';
import aero1 from '../images/cards/aero-1.png';
import aero2 from '../images/cards/aero-2.png';
import aero3 from '../images/cards/aero-3.png';
import aero4 from '../images/cards/aero-4.png';
import aero5 from '../images/cards/aero-5.png';

import aeroSport from '../images/cards/aero-sport.png';
import aeroSport1 from '../images/cards/aero-sport-1.png';
import aeroSport2 from '../images/cards/aero-sport-2.png';

import aeroProg from '../images/cards/aero-prog.png';
import aeroProg1 from '../images/cards/aero-prog-1.png';
import aeroProg2 from '../images/cards/aero-prog-2.png';
import aeroProg3 from '../images/cards/aero-prog-3.png';
import aeroProg4 from '../images/cards/aero-prog-4.png';

import aeroTrack from '../images/cards/aero-track.png';

import aeroCube from '../images/cards/aero-cube.png';

//картинки базовый
import basic from '../images/cards/basic.png';
import basic1 from '../images/cards/basic-1.png';
import basic2 from '../images/cards/basic-2.png';
import basic3 from '../images/cards/basic-3.png';
import basic4 from '../images/cards/basic-4.png';

import basic17TC from '../images/cards/basic-17-tc.png';
import basic17TC1 from '../images/cards/basic-17-tc-1.png';
import basic17TC2 from '../images/cards/basic-17-tc-2.png';
import basic17TC3 from '../images/cards/basic-17-tc-3.png';

import basicB5 from '../images/cards/basic-b5.png';
import basicB51 from '../images/cards/basic-b5-1.png';
import basicB52 from '../images/cards/basic-b5-2.png';
import basicB53 from '../images/cards/basic-b5-3.png';
import basicB54 from '../images/cards/basic-b5-4.png';
import basicB55 from '../images/cards/basic-b5-5.png';

import basicB5TC from '../images/cards/basic-b5-tc.png';
import basicB5TC1 from '../images/cards/basic-b5-tc-1.png';
import basicB5TC2 from '../images/cards/basic-b5-tc-2.png';
import basicB5TC3 from '../images/cards/basic-b5-tc-3.png';
import basicB5TC4 from '../images/cards/basic-b5-tc-4.png';

import basicStart from '../images/cards/basic-start.png';
import basicStart1 from '../images/cards/basic-start-1.png';
import basicStart2 from '../images/cards/basic-start-2.png';
import basicStart3 from '../images/cards/basic-start-3.png';

//Картинки начальный
import elementary from '../images/cards/elementary.png';
import elementary1 from '../images/cards/elementary-1.png';
import elementary2 from '../images/cards/elementary-2.png';
import elementary3 from '../images/cards/elementary-3.png';

//Картинки станки
import machines from '../images/cards/machines.png';
import machines1 from '../images/cards/machines-1.png';
import machines2 from '../images/cards/machines-2.png';

import machinesM from '../images/cards/machines-m.png';
import machinesM1 from '../images/cards/machines-m-1.png';
import machinesM2 from '../images/cards/machines-m-2.png';

import machinesR from '../images/cards/machines-r.png';
import machinesR1 from '../images/cards/machines-r-1.png';
import machinesR2 from '../images/cards/machines-r-2.png';

//Картинки предварительный
import preliminary from '../images/cards/preliminary.png';
import preliminary1 from '../images/cards/preliminary-1.png';
import preliminary2 from '../images/cards/preliminary-2.png';

//Картинки профессиональный
import professional from '../images/cards/professional.png';
import professional1 from '../images/cards/professional-1.png';
import professional2 from '../images/cards/professional-2.png';
import professional3 from '../images/cards/professional-3.png';
import professional4 from '../images/cards/professional-4.png';
import professional5 from '../images/cards/professional-5.png';

//Картинки исследовательский
import research from '../images/cards/research.png';
import research1 from '../images/cards/research-1.png';
import research2 from '../images/cards/research-2.png';
import research3 from '../images/cards/research-3.png';

const cards = [
  {
    level: 'preliminary',
    img: [preliminary, preliminary1, preliminary2],
    preview: [],
    title: 'Образовательный робототехнический модуль «Предварительный уровень»',
    article: 'ТР-0152',
    price: '132 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «Предварительный уровень» содержит:',
        list: [
          'Базовые робототехнические наборы – 5 шт.; для группового и индивидуального применения.',
          'Методические рекомендации для преподавателя  - 1 шт; содержат теоретические аспекты по основам робототехники; рекомендации по сборке моделей.',
          'Методические рекомендации для ученика - 5 шт.; содержат руководства по сборке 25 различных моделей на основе базового набора и поясняющие материалы.',
        ],
        note: '',
      }
    ],
    specifications: [
      {
        title: '',
        list: [],
        note: 'Набор конструктивных элементов состоит из пластиковых деталей и крепежных элементов, а так же специализированного инструмента для их сборки.',
      },
      {
        title: 'В состав модуля входит:',
        list: [
          '629 деталей, перфорированные пластины из высококачественного пластика;',
          '690 элементов различных комплектов заклепок для фиксированных и подвижных соединений;',
          '20 колес и 30 эластичных резиновых жгутов.',
        ],
        note: 'Крепежные элементы позволяют реализовывать как фиксированные соединения деталей и фланцев, так и подвижные вращающиеся соединения шарниров и различных передач.',
      },
      {
        title: 'Каждый модуль содержит:',
        list: [
          'Привод на базе двигателя постоянного тока и понижающего редуктора – 5 шт. Привод представляет собой электромеханическую сборку двигателя постоянного тока, а также редуктора. В корпусе каждого привода предусмотрен отсек для установки элементов питания типа АА.',
          'Специализированный инструмент для сборки – 10 шт.',
        ],
        note: 'Все элементы каждого базового робототехнического набора, входящего в комплект поставки конструктивно и электрически совместимы друг с другом.',
      },
    ],
  },
  {
    level: 'elementary',
    img: [elementary, elementary1, elementary2, elementary3],
    preview: [],
    title: 'Образовательный робототехнический модуль «Начальный уровень»',
    article: 'ТР-0241',
    price: '450 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «Начальный уровень WS» содержит:',
        list: [
          'Супер набор (2-го поколения) – 2 шт.;',
          'Соревновательный набор – 2 шт.;',
          'Конструктивный набор – 1 шт.;',
          'Мехатронный набор – 1 шт.;',
          'Сенсор технического зрения – 1 шт.;',
          'Методические рекомендации - 5 шт.;',
          'Игровое поле для соревнований - 1 шт.;',
          'Комплект соревновательных элементов - 1 шт.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: '',
        list: [],
        note: 'Супер набор (2-го поколения) состоит из пластиковых деталей и крепежных элементов, не требующих специализированного инструмента для сборки. ',
      },
      {
        title: 'В состав робототехнического набора входит:',
        list: [
          'Контроллер управления роботом;',
          'Пульт управления;',
          'Аккумуляторная батарея;',
          'Датчик расстояния;',
          'Оптический датчик;',
          'Электрический привод - 4 шт.',
          'Датчик касания со светодиодной панелью;',
          'Кабели для устройств;',
          'Инструмент для сборки;',
          'Коробки для хранения - 2 шт.;',
          'Конструктивные компоненты – 1036 шт.',
        ],
        note: '',
      },
      {
        title: 'Соревновательный набор:',
        list: [
          'Набор цепных колес и цепей;',
          'Гусеничный набор;',
          'Набор колес и покрышек;',
          'Дополнительные колеса и моторы;',
          'Колесо всенаправленного движения - 2 шт.;',
          'Привод - 2 шт.',
        ],
        note: '',
      },
      {
        title: 'Конструктивный набор:',
        list: [
          'Конструктивные элементы из пластика - 194 шт.;',
          'Переходные и соединительные элементы - 312 шт.;',
          'Крепежные элементы, представляющие собой пластиковые втулки различной длины – 320 шт.;',
          'Валы и сопутствующие им элементы – 170 шт.;',
          'Шкивы – 8 шт.;',
          'Ремни – 8 шт.;',
          'Элементы подшипниковых креплений – 15 шт.',
        ],
        note: '',
      },
      {
        title: 'Мехатронный набор:',
        list: [
          'Расширенный комплект для создания зубчатых передач;',
          'Комплект для создания дифференциальных передач;',
          'Комплект для создания планетарных передач;',
          'Комплект универсальных соединителей валов;',
          'Омни-колеса (колеса всенаправленного движения).',
        ],
        note: '',
      },
    ],
  },
  {
    level: 'basic',
    img: [basic, basic1, basic2, basic3, basic4],
    preview: [],
    title: 'Образовательный робототехнический модуль «Базовый уровень»',
    article: 'ТР-0441А',
    price: '432 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «Базовый уровень» содержит:',
        list: [
          'Базовые робототехнический набор – 4 шт.; для изучения базовых основ робототехники, основ программирования роботов и робототехнических устройств на базе программно-аппаратного комплекса совместимого с программируемым контроллером Arduino.',
          'Ресурсный робототехнический набор – 4 шт.; для изучения основ электроники и микропроцессорной техники, основ программирования контроллеров  на базе программируемого контроллера Iskra Neo совместимого с контроллером Arduino.',
          'Методические рекомендации в 2х частях - 4 шт.; содержат руководства по изучению основ программирования и сборке различных схем и моделей  базового и ресурсного наборов.',
          'Диск с программными материалами и дополнительными заданиями - 1 шт.',
        ],
        note: 'Все содержимое образовательного робототехнического модуля помещено в пластиковый бокс с крышкой, для обеспечения сохранности при перевозке и хранении оборудования.',
      },
    ],
    specifications: [
      {
        title: 'В состав базового робототехнического набора входят следующие основные конструктивные элементы и устройства:',
        list: [
          'Колеса с прорезиненным ободом диаметром - 4шт.',
          'Комплект для сборки захватного устройства, включающий в себя схват манипулятора, комплект зубчатых колес, набор крепежных элементов – 1 комплект.',
          'Комплект на базе привода постоянного тока и силового модуля для управления приводом –  2 шт.',
          'Привод постоянного тока –  2 шт.',
          'ИК-датчик –  3 шт.',
          'УЗ-датчик – 1 шт. (аналогового типа, диапазон изм. от 40 мм до 2,9 м).',
          'Аккумуляторная батарея емкостью не менее 2000 мАч –  1 шт',
          'Программируемый контроллер –  1шт. Выполнен в  виде специализированного модуля с коммуникационными портами и разъемами, расположенными по периметру.'
        ],
        note: '',
      },
      {
        title: 'Программируемый  контроллер включает в себя:',
        list: [
          '7 пинов с ШИМ;',
          '1 аппаратный интерфейс UART (Serial);',
          '1 аппаратный интерфейс TWI (I²C);',
          '5 пинов, поддерживающих аппаратное прерывание;',
        ],
        note: '',
      },
    ],
  },
  {
    level: 'basic-start',
    img: [basicStart, basicStart1, basicStart2, basicStart3],
    preview: [],
    title: 'Образовательный робототехнический модуль «Базовый уровень». Стартовый набор.',
    article: 'ТВ-0441С-17',
    price: '92 400',
    kit: [
      {
        title: 'Стартовый робототехнический набор предназначен для индивидуальных занятий по изучению основ робототехники, проектирования и программирования роботов, реализации творческих инженерных проектов, а так же создания робототехнических комплексов для задач образовательного и соревновательного характера.',
        list: [],
        note: '',
      },
      {
        title: 'Набор включает:',
        list: [
          'Комплект деталей и механизмов для сборки подвижной робототехнической платформы с захватным устройством.',
          'Программируемый Arduino совместимый микроконтроллер для расширения функциональности платформы.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Программируемый контроллер',
        list: [
          'Программируемый Arduino - Technolab – 1 шт.',
        ],
        note: '',
      },
      {
        title: 'Механика',
        list: [
          'Двухпроводной мотор 393 – 3 шт',
          'Наконечник для вала – 21 шт',
          'Соединитель валов – 4 шт',
          'Вал (3 дюйма в длину) – 8 шт',
          'Опорная планка – 18 шт',
          'Зубчатое колесо (12 зубьев) – 2 шт',
          'Зубчатое колесо (60 зубьев) – 6 шт',
          'Зубчатое колесо (84 зубьев) – 2 шт',
          'Колесо (4 дюйма) – 4 шт',
          'Комплект схвата (включая мотор) – 1 шт.',
        ],
        note: '',
      },
      {
        title: 'Металлические детали',
        list: [
          'Пластина с 20 отверстиями – 2 шт',
          'Рама с 20 отверстиями – 2 шт',
          'Рама с 16 отверстиями – 2 шт',
          'Соединительная пластина 1х2х1х15 отверстий – 2 шт',
          'Соединительная пластина 1х2х1х20 отверстий – 1 шт.',
        ],
        note: '',
      },
      {
        title: 'Электрические детали',
        list: [
          'Контроллер мотора 29 – 2 шт.',
          'Крепление батареи (2 ремня) – 1 шт.',
          'Сенсор трекера линии – 3 шт.',
          'Ультразвуковой дальномер – 1 шт.',
          'Инкрементный энкодер для привода – 1 шт.',
          'Аккумуляторная батарея – 1 шт.',
          'Зарядное устройство для аккумуляторной батареи – 1 шт.',
        ],
        note: '',
      },
      {
        title: 'Крепёжные элементы',
        list: [
          'Винт 8-32 x 1/4 дюйма – 32 шт.',
          'Винт 8-32 x 1/2 дюйма – 14 шт.',
          'Винт 8-32 x 1 1/2 дюйма – 3 шт.',
          'Закрепляющий винт 6-32 x 1/4 дюйма – 6 шт.',
          'Закрепляющий винт 6-32 x 1/2 дюйма – 6 шт.',
          'Гайка 8-32 – 42 шт.',
          'Разделитель для вала (4.6 мм) – 6 шт.',
          'Стяжки – 52 шт.',
          'Заклепки для плат – 32 шт.',
        ],
        note: '',
      },
      {
        title: 'Инструменты',
        list: [
          'Шестигранный ключ (5/64") – 2 шт. ',
          'Шестигранный ключ (3/32") – 2 шт.',
          'Гаечный ключ VEX – 2 шт.',
        ],
        note: '',
      },
    ],
  },
  {
    level: 'basic-b5',
    img: [basicB5, basicB51, basicB52, basicB53, basicB54, basicB55],
    preview: [],
    title: 'Базовый робототехнический набор "Базовый уровень Ардуино"',
    article: 'ТВ-0441-В5',
    price: '195 000',
    kit: [
      {
        title: 'Набор "Базовый уровень Ардуино" включает в себя:',
        list: [
          'Конструктивные элементы;',
          'Соединительные элементы;',
          'Электрические приводы;',
          'Комплект датчиков;',
          'Контроллер для управления роботом.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Набор состоит из следующих компонентов:',
        list: [
          'Конструктивные элементы - 9 шт.',
          'Соединительные элементы - 97 шт.',
          'Ультразвуковой дальномер - 1 шт.',
          'Датчик для езды по линии - 3 шт.',
          'Колесо - 4 шт.',
          'Схват робота - 1 шт.',
          'Электрический привод - 4 шт.',
          'Управляющий контроллер - 4 шт.',
          'Аккумулятор - 1 шт.',

        ],
        note: '',
      },
    ],
  },
  {
    level: 'basic-b5-tc',
    img: [basicB5TC, basicB5TC1, basicB5TC2, basicB5TC3, basicB5TC4],
    preview: [],
    title: 'Робототехнический набор по механике, мехатронике и робототехнике',
    article: 'ТВ-0441-В5-ТС',
    price: '205 000',
    kit: [
      {
        title: 'Набор включает в себя:',
        list: [
          'Конструктивные элементы;',
          'Соединительные элементы;',
          'Электрические приводы;',
          'Модуль технического зрения;',
          'Контроллер для управления роботом.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Набор состоит из следующих компонентов:',
        list: [
          'Конструктивные элементы - 9 шт.',
          'Соединительные элементы - 97 шт.',
          'Колесо - 4 шт.',
          'Схват робота - 1 шт.',
          'Электрический привод - 4 шт.',
          'Управляющий контроллер - 4 шт.',
          'Аккумулятор - 1 шт.',
          'Модуль технического зрения - 1 шт.',
        ],
        note: '',
      },
    ],
  },
  {
    level: 'basic-17-tc',
    img: [basic17TC, basic17TC1, basic17TC2, basic17TC3],
    preview: [],
    title: 'Базовый робототехнический набор "Базовый уровень Ардуино"',
    article: 'ТВ-0441С-17-ТС',
    price: '205 000',
    kit: [
      {
        title: 'Набор "Базовый уровень Ардуино" включает в себя:',
        list: [
          'Конструктивные элементы;',
          'Соединительные элементы;',
          'Электрические приводы;',
          'Контроллер для управления роботом.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Набор состоит из следующих компонентов:',
        list: [
          'Конструктивные элементы - 11 шт.',
          'Соединительные элементы - 184 шт.',
          'Колесо - 4 шт.',
          'Схват робота с установленным приводом - 1 шт.',
          'Электрический привод - 3 шт.',
          'Контроллер управления приводом - 2 шт.',
          'Управляющий контроллер - 4 шт.',
          'Аккумулятор - 1 шт.',
        ],
        note: '',
      },
    ],
  },
  {
    level: 'professional',
    img: [professional, professional1, professional2, professional3, professional4, professional5],
    preview: [],
    title: 'Образовательный робототехнический модуль «Профессиональный уровень»',
    article: 'ТР-0541',
    price: '432 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «Профессиональный уровень» содержит:',
        list: [
          'Базовые робототехнические наборы – 4шт.; для группового и индивидуального применения.',
          'Методические рекомендации для преподавателя  - 1шт; содержат теоретические аспекты по основам робототехники; рекомендации по сборке моделей.',
          'Методические рекомендации для ученика - 4шт.; содержат руководства по сборке 10 различных моделей.',
          'Оптический диск с лицензионным ПО - 1шт.; для программирования управляющего контроллера.',
          'Оптический диск с инструкциями и рабочими материалами - 1шт.',
          'Комплект модулей Bluetooth для беспроводной передачи данных-1 шт. (комплект состоит из 2х устройств).',
          'Комплект модулей ZigBee для беспроводной передачи данных - 2шт. (комплект состоит из 3х устройств).',
          'Модуль USB для преобразования интерфейсов - 2шт. Для интерфейсов TTL, RS-232 и RS-485 в последовательный интерфейс.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: '',
        list: [],
        note: 'Базовый робототехнический набор состоит из пластиковых деталей и крепежных элементов, а так же специализированного инструмента для их сборки.',
      },
      {
        title: 'Состав базового комплекта содержит:',
        list: [
          '81 детали, представляющих собой перфорированные пластины из прочного пластика;',
          '30 элементов различных подвижных передач и шарниров;',
          '53 детали, представляющих собой конструктивные элементы и переходные фланцы между компонентами набора;',
          '102 детали, представляющие собой компоненты для сборки гусеничных траков; пассивная опора – 1шт;',
          '10 зубчатых колес;',
          '2 резиновых колес с дисками из прочного пластика;',
          '14 шкивов и 6 фланцев.',
        ],
        note: '',
      },
      {
        title: 'Крепежные элементы представляют собой:',
        list: [
          'комплект винтов различной длины в кол-ве 135 шт;',
          'комплект специализированных крепежных элементов в кол-ве 230 шт, представляющих собой пластиковые втулки и заклепки.',
        ],
        note: 'Крепежные элементы позволяют реализовывать как фиксированные соединения деталей и фланцев, так и подвижные вращающиеся соединения',
      },
      {
        title: 'Набор содержит следующие основные элементы:',
        list: [
          'Сервопривод на базе двигателя постоянного тока и понижающего редуктора - 2шт. Привод представляет собой электромеханическую сборку двигателя постоянного тока, а так же редуктора. Сервопривод обладает сетевым интерфейсом для управления посредством цифровых пакетов и возвращения параметров обратной связи по шине TTL.',
          'ИК – датчик - 3шт. ИК-сенсор с аналоговым выходом для выдачи результатов измерений.',
          'Массив ИК-сенсоров - 1шт.  Устройство представляет единый модуль с общим кол-во ИК сенсоров 7шт. В состав устройства входит динамик, воспроизводящий звуки различной нотной тональности. Устройство обладает сетевым интерфейсом для управления посредством цифровых пакетов и возвращения параметров обратной связи по шине TTL.',
          'Интерфейсный кабель USB – 1шт., для программирования управляющего контроллера.',
          'Комплект шлейфов – 1шт., для соединения элементов базового робототехнического набора. - Отсек для установки источника питания типа АА – 6шт.',
          'Управляющий контроллер – 1шт. Управляющий контроллер представляет собой блок управления конструктивно и электрически совместимый со всеми элементами базового набора.  Напряжение питания контроллера находится в диапазоне 6-15В.  На корпусе контроллера  установлены 6 кнопок, 6 индикационных светодиодов, а так же переключатель питания управляющего контроллера. Внутри корпуса контроллера расположен микрофон для детектирования внешних звуков, а так же датчик уровня бортового питания. Контроллер содержит: 6 портов для подключения внешних цифровых и аналоговых устройств, 5 портов для подключения устройств по шине TTL.',
        ],
        note: 'Все элементы каждого базового робототехнического набора, входящего в комплект поставки конструктивно и электрически совместимы друг с другом.',
      },
    ],
  },
  {
    level: 'research',
    img: [research, research1, research2, research3],
    preview: [],
    title: 'Образовательный робототехнический модуль «Исследовательский уровень»',
    article: 'ТР-0621',
    price: '396 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «Исследовательский уровень» содержит:',
        list: [
          'Базовый робототехнический набор – 1шт.; для применения в образовательном процессе и исследованиях.',
          'Ресурсный робототехнический набор – 1шт.; для применения в специализированных соревнованиях.',
          'Методические рекомендации для преподавателя  - 1шт.',
          'Методические рекомендации для ученика - 1шт.',
          'Оптический диск с лицензионным ПО - 1шт.; для программирования управляющего контроллера.',
          'Оптический диск с инструкциями и рабочими материалами - 1шт.',
        ],
        note: 'Содержит программное обеспечение для настройки, калибровки и управления универсальным модулем на базе CMOS камеры, инструкции, методические рекомендации. Содержит инструкции по управлению подвижными моделями роботов с помощью мультимедийных устройств  на базе ОС Android посредством канала связи на базе интерфейса Bluetooth.',
      },
    ],
    specifications: [
      {
        title: '',
        list: [],
        note: 'Базовый робототехнический набор состоит из пластиковых деталей и крепежных элементов, а так же специализированного инструмента для их сборки.',
      },
      {
        title: 'В состав базового комплекта входит:',
        list: [
          '120 деталей, представляющих собой различные пластины и скобы из качественного пластика;',
          'корпусные элементы из прозрачного пластика 4шт;',
          'различные втулки в кол-ве 60шт для реализации фиксированных и подвижных соединений;',
          'фиксирующие скобы для кабелей и шлейфов в кол-ве 20шт;',
          'комплект втулок и заклепок в кол-ве 28шт.',
        ],
        note: '',
      },
      {
        title: 'Крепежные элементы представляют собой:',
        list: [
          'комплект винтов и шурупов различной длины в кол-ве 640шт;',
          'комплект гаек различного размера в кол-ве 410шт.',
        ],
        note: '',
      },
      {
        title: 'Набор содержит следующие основные элементы:',
        list: [
          'Сервопривод на базе двигателя постоянного тока и понижающего редуктора -  18шт. Сервопривод обладает сетевым интерфейсом для управления посредством цифровых пакетов и возвращения параметров обратной связи по шине TTL.',
          'ИК – датчик - 2шт., обладает аналоговым выходом для выдачи результатов измерений, ИК – дальномер -  1шт.',
          'Двухосевой гироскоп – 1шт. Датчик с аналоговым выходом для возврата результата измерений.',
          'Пульт дистанционного управления – 1шт. Пульт представляет собой ИК-джойстик с  программируемыми кнопками в кол-ве 10 шт. Питание пульта осуществляется от аккумуляторов типа АА. Конструкция пульта предусматривает возможность замены ИК-модуля передачи данных на модуль типа ZigBee или Bluetooth.',
          'ИК-передатчик - 1шт. Устройство предназначено для подключения к управляющему контроллеру и приема сигналов от пульта дистанционного управления.',
          'Управляющий контроллер – 1шт. Управляющий контроллер представляет собой блок управления конструктивно и электрически совместимый со всеми элементами базового набора. Внутри корпуса контроллера расположен микрофон, а так же датчик уровня бортового питания. Контроллер содержит: 6 портов для подключения внешних цифровых устройств, 5 портов для подключения устройств по TTL.',
          'Комплект модулей ZigBee - 1шт., для беспроводной передачи данных. Каждый комплект состоит из 3х устройств, позволяющих организовать передачу данных между элементами базового набора и персональным компьютером.',
          'Модуль USB для преобразования интерфейсов в кол-ве 1шт. Модуль обеспечивает преобразование интерфейсов TTL,RS-232,RS-485 в последовательный интерфейс персонального компьютера.',
          'Универсальный сенсорный модуль - 1шт. Устройство содержит: 3 ИК-сенсора, позволяющих измерять дальность до объекта или яркость поверхности; ИК-порт; микрофон; динамик; датчик температуры. Управление устройством и считывание показание сенсорных устройств осуществляется по шине TTL.',
          'Универсальный модуль на базе CMOS камеры - 1шт. Устройство обладает последовательным коммуникационным интерфейсом для подключения к управляющему контроллеру.',
          'Аккумуляторная батарея (LiPo) – 1шт. Аккумуляторная батарея установлена в пластиковом корпусе, совместимым с  корпусными элементами и деталями комплекта.',
          'Адаптер для зарядки аккумуляторной батареи от сети 220В. – 1шт.',
          'Комплект сетевых кабелей -1шт.,  для зарядки аккумуляторной батареи.',
          'USB  интерфейсный кабель для программирования базового набора – 1шт',
        ],
        note: '',
      },
      {
        title: '',
        list: [
        ],
        note: 'Ресурсный робототехнический набор состоит из пластиковых деталей и крепежных элементов, а так же специализированного инструмента для их сборки.',
      },
      {
        title: 'Ресурсный робототехнический набор содержит:',
        list: [
          '81 детали, представляющих собой перфорированные пластины из прочного пластика;',
          '30 элементов различных подвижных передач и шарниров;',
          '53 детали, представляющих собой конструктивные элементы и переходные фланцы между   различными компонентами набора;',
          '102 детали, представляющие собой компоненты для сборки гусеничных траков;',
          'пассивная опора – 1шт;',
          '10 зубчатых колес;',
          '2 резиновых колес с дисками из качественного пластика;',
          '14 шкивов и 6 круглых фланцев.',
        ],
        note: 'Крепежные элементы представляют собой:  комплект винтов различной длины в кол-ве 135 шт; комплект специализированных крепежных элементов в кол-ве 230 шт, представляющих собой пластиковые втулки и заклепки. Крепежные элементы позволяют реализовывать как фиксированные соединения деталей и фланцев, так и подвижные вращающиеся соединения шарниров и различных передач.',
      },
      {
        title: 'Набор содержит следующие основные элементы:',
        list: [
          'Сервопривод на базе двигателя постоянного тока и понижающего редуктора - 2шт. Привод представляет собой электромеханическую сборку двигателя постоянного тока, а так же редуктора.  Сервопривод обладает сетевым интерфейсом для управления посредством цифровых пакетов и возвращения параметров обратной связи по шине TTL.',
          'ИК – датчик - 3шт. ИК-сенсор обладает аналоговым выходом для выдачи результатов измерений.',
          'Массив ИК-сенсоров - 1шт.  Устройство представляет единый модуль с общим кол-во ИК сенсоров 7шт. В состав устройства  входит динамик, воспроизводящий звуки различной нотной тональности. Устройство обладает сетевым интерфейсом для управления посредством цифровых пакетов и возвращения параметров обратной связи по шине TTL.',
          'Интерфейсный кабель USB – 1шт., для программирования управляющего контроллера.',
          'Комплект шлейфов – 1шт., для соединения основных элементов базового робототехнического набора.',
          'Отсек для установки источника питания типа АА – 6шт.',
          'Управляющий контроллер – 1шт. Управляющий контроллер представляет собой блок управления конструктивно и электрически совместимый со всеми элементами базового набора.  микрофон для детектирования внешних звуков, а так же датчик уровня бортового питания. Контроллер содержит: 6 портов для подключения внешних цифровых и аналоговых устройств, 5 портов для подключения устройств по шине TTL.',
        ],
        note: 'Все элементы каждого базового робототехнического набора, входящего в комплект поставки  конструктивно и электрически совместимы друг с другом.',
      },
    ],
  },
  {
    level: 'aero',
    img: [aero, aero1, aero2, aero3, aero4, aero5],
    preview: [],
    title: 'Образовательный робототехнический модуль "АЭРО"',
    article: 'ТА-0841',
    price: '540 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «АЭРО» содержит в своём составе:',
        list: [
          'Полностью собранный и настроенный дрон',
          'Три дрона для сборки',
          'FPV системы для полётов от первого лица',
          'Камеры с функцией записи в HD формате',
          'Инструменты',
          'Расходные и запасные материалы',
          'Методическое пособие',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Раздел дополняется',
        list: [],
        note: '',
      },
    ],
  },
  {
    level: 'aero-sport',
    img: [aeroSport, aeroSport1, aeroSport2],
    preview: [],
    title: 'Образовательный робототехнический модуль «АЭРО». Спортивный.',
    article: 'ТА-0842',
    price: '540 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «АЭРО. Спортивный» содержит в своём составе:',
        list: [
          'Готовые к полёту квадрокоптеры;',
          'FPV системы для полёта от первого лица;',
          'Зарядные станции;',
          'Расходные и запасные материалы;',
          'Комплект трассы для построения маршрутов для соревнований и практических занятий;',
          'Беспроводную система учета времени для каждого дрона;',
          'Методическое пособие.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Раздел дополняется',
        list: [],
        note: '',
      },
    ],
  },
  {
    level: 'aero-prog',
    img: [aeroProg, aeroProg1, aeroProg2, aeroProg3, aeroProg4],
    preview: [],
    title: 'Образовательный робототехнический модуль «АЭРО». Программирование.',
    article: 'ТА-0843',
    price: '540 000',
    kit: [
      {
        title: 'Образовательный робототехнический модуль «АЭРО. Программирование» содержит в своём составе:',
        list: [
          'Готовые к полёту квадрокоптеры;',
          'Системы коммутации квадрокоптеров;',
          'Система навигации квдарокоптеров;',
          'Зарядные станции;',
          'Расходные и запасные материалы;',
          'Методическое пособие.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Раздел дополняется',
        list: [],
        note: '',
      },
    ],
  },
  {
    level: 'aero-cube',
    img: [aeroCube],
    preview: [],
    title: 'Ресурсный набор к образовательным модулям "Аэро-Куб"',
    article: 'ТА-0841-Р1',
    price: '180 000',
    kit: [
      {
        title: 'Ресурсный набор к образовательным модулям "Аэро-Куб" включает в себя:',
        list: [
          'Металлический куб;',
          'Сумка для переноски.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Размеры куба в собранном виде (3 х 3 х 3 м)',
        list: [],
        note: '',
      },
    ],
  },
  {
    level: 'aero-track',
    img: [aeroTrack],
    preview: [],
    title: 'Ресурсный набор к образовательным модулям "Трасса для дронрейсинга"',
    article: 'ТА-0842-Р1',
    price: '180 000',
    kit: [
      {
        title: 'Ресурсный набор к образовательным модулям "Трасса для дронрейсинга" включает в себя:',
        list: [
          'Комплект элементов для организации соревновательной трассы;',
          'Сумку для переноски.',
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'В набор входит:',
        list: [
          'Ворота квадратные - 5 шт.',
          'Флаг - 5 шт.',
          'Кольцо - 8 шт.',
          'Стойка универсальная для кольца - 8 шт.',
          'Взлетная площадка - 4 шт.',
          'Сумка - 1 шт.',
        ],
        note: '',
      },
    ],
  },
  {
    level: 'machines-m',
    link: 'machines-m',
    img: [machinesM, machinesM1, machinesM2],
    preview: [],
    title: 'Конструктор модульных станков 6 в 1 (Металл)',
    article: 'ТС-61М',
    price: '84 000',
    kit: [
      {
        title: 'Набор включает в себя компоненты для сбора токарного станка для деревообработки и обработки металла, электролобзика, горизонтального и вертикального фрезерных станков, шлифовального и сверлильного станков.',
        list: [],
        note: 'Станки не могут быть собраны одновременно, поскольку используют сходные модули',
      },
    ],
    specifications: [
      {
        title: 'Набор содержит:',
        list: [
          'Блок питания (12V; 3А) – 1шт.',
          'Электромотор (12V; 2A; 12000 об/мин; 24W) – 1шт.',
          'приводной ремень – 2шт.',
          'Позиционирующая пластина(металл) – 1шт.',
          'Станины разной длины – 2шт.',
          'Соединительный сухарь (металл) – 6шт.',
          'Поперечная салазка (металл) – 1шт.',
          'Продольная салазка (с металлическим слайдером) – 1шт.',
          'Набор медных цанг (от 1мм. до 6мм.) – 1шт.',
          'Подручник для токарного станка (металл) – 1шт.',
          'Корпус лобзика в сборе (металл) – 1шт.',
          'Рабочий стол (металл) – 2шт.',
          'Защита подвижных элементов (пластик) – 2шт.',
          'Фиксатор резца (пластик) – 4шт.',
          'Сверло – 1шт.',
          'Фреза – 1шт.',
          'Резец – 1шт.',
          'Стамеска – 1шт.',
          'Защитные очки – 1шт.',
          'Комплект инструмента для сборки – 1шт.',
        ],
        note: '',
      },
    ],
  },

  {
    level: 'machines',
    img: [machines, machines1, machines2],
    preview: [],
    title: 'Конструктор модульных станков 6 в 1',
    article: 'ТС-61Дс',
    price: '60 000',
    kit: [
      {
        title: 'Набор включает в себя компоненты для сбора:',
        list: [
          'токарного станка для обработки дерева',
          'токарного станка для обработки металла',
          'электролобзика',
          'горизонтального и вертикального фрезерных станков',
          'шлифовального и сверлильного станков, каждый из которых, обладает собственными  уникальными функциями.',
        ],
        note: 'Конструктор имеет возможность функционально расширяться за счет  дополнительно приобретаемых модулей.',
      },
      {
        title: 'Станки не могут быть собраны одновременно, поскольку используют сходные модули.',
        list: [
        ],
        note: '',
      },
    ],
    specifications: [
      {
        title: 'Набор содержит:',
        list: [
          'Блок питания (12V; 3А) – 1шт.',
          'Электромотор (12V; 2A; 12000 об/мин; 24W) – 1шт.',
          'Приводной ремень – 2шт.',
          'Позиционирующая пластина (металл) – 1шт.',
          'Станины разной длины – 2шт.',
          'Соединительный сухарь (пластик) – 8шт.',
          'Поперечная салазка (пластик) – 1шт.',
          'Продольная салазка (с пластиковым слайдером) – 1шт.',
          'Комплект пластиковых цанг (от 1 до 6 мм) – 1шт.',
          'Подручник для токарного станка (пластик) – 1шт.',
          'Корпус лобзика в сборе (пластик) – 1шт.',
          'Рабочий стол (пластик) – 2шт.',
          'Защита подвижных элементов (пластик) – 2шт.',
          'Фиксатор резца (пластик) – 4шт.',
          'Сверло 1шт',
          'Фреза 1шт',
          'Резец 1шт',
          'Пилки – 10шт.',
          'Защитные очки – 1шт.',
          'Комплект инструмента для сборки – 1шт.',
        ],
        note: '',
      },
    ],
  },

  {
    level: 'machines-r',
    link: 'machines-r',
    img: [machinesR, machinesR1, machinesR2],
    preview: [],
    title: 'Ресурсный набор к конструктору модульных станков 6 в 1',
    article: 'ТС-61ДРс',
    price: '78 000',
    kit: [
      {
        title: '',
        list: [],
        note: 'Набор включает в себя компоненты расширения возможностей базового набора станков для улучшения качества обработки и количества обрабатываемых материалов и поверхностей',
      },
    ],
    specifications: [
      {
        title: 'Набор содержит:',
        list: [
          'Блок питания (12V; 3А) – 1шт.',
          'Электромотор (12V; 2A; 12000 об/мин; 24W) – 1шт.',
          'Приводной ремень – 3шт.',
          'Сухарь соединительный – 4 шт.',
          'Калибр для правильной установки эксцентрика – 1шт.',
          'Задняя бабка – 2шт.',
          'Подвижный центр – 8шт.',
          'Подручник (металл) – 1шт.',
          'Центроискатель 1шт.',
          'Эксцентрик – 3шт.',
          'Наклейка абразивная для шлифовального диска – 40шт.',
          'Заточной круг с крепежом – 1шт.',
          'Сверло – 2шт.',
          'фреза – 1шт.',
          'Резец по металлу – 1шт.',
          'Пилки для лобзика – 20шт.',
          'Резец по дереву – 2шт.',
          'Защитные очки – 8шт.',
        ],
        note: '',
      },
    ],
  },


]

export default cards;