import img0 from '../images/instructions/tr-0152-mp.jpg';
import img1 from '../images/instructions/tr-0152-mu1.jpg';
import img2 from '../images/instructions/tr-0152-mu2.jpg';
import img3 from '../images/instructions/tv-0241-mp.jpg';
import img4 from '../images/instructions/tv-0241-mu1.jpg';
import img5 from '../images/instructions/tv-0241-mu2.jpg';
import img6 from '../images/instructions/tv-0441-m-1.jpg';
import img7 from '../images/instructions/tv-0441-m-2.jpg';
import img8 from '../images/instructions/te-0276-m.jpg';
import img9 from '../images/instructions/tr-0541-mp.jpg';
import img10 from '../images/instructions/tr-0541-mu.jpg';
import img11 from '../images/instructions/tr-0621-mp.jpg';
import img12 from '../images/instructions/tr-0621-mpr.jpg';
import img13 from '../images/instructions/tr-0621-mu.jpg';
import img14 from '../images/instructions/tr-0621-mur.jpg';
import img15 from '../images/instructions/tv-0712-mp.jpg';
import img16 from '../images/instructions/tv-0712-mu.jpg';
import img17 from '../images/instructions/ta-0841-mp.jpg';
import img18 from '../images/instructions/go_book_new.jpeg';
import img19 from '../images/instructions/iq_book_new.jpeg';
import img20 from '../images/instructions/v5_book_new.jpeg';
import img21 from '../images/instructions/bits_book_new.jpeg';
import img22 from '../images/instructions/bits_book_2_new.jpeg';
import img23 from '../images/instructions/sphero_book_new.jpeg';
import img24 from '../images/instructions/dobot_teacher.jpeg';
import img25 from '../images/instructions/dobot_blockly.jpeg';
import img26 from '../images/instructions/dobot_python.jpeg';

const manuals = [
    {
        link: 'http://examen-technolab.ru/instructions/tr-0152-mp.pdf',
        img: img0,
        title: 'Конструирование роботов с детьми 5-8 лет.',
        subtitle: 'Методические рекомендации по организации занятий.',
        text: 'В пособии представлены материалы по детскому конструированию с использованием образовательного робототехнического конструктора для образовательной деятельности и игр с детьми старшего дошкольного возраста. Примеры по организации занятий, логические задачи, задания, формирующие у ребенка социально-коммуникативное, познавательное, речевое, физическое развитие.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0152-mu1.pdf',
        img: img1,
        title: 'Конструирование роботов с детьми 5-8 лет.',
        subtitle: 'Рабочая тетрадь для детей старшей группы доо (1 часть)',
        text: 'Рабочая тетрадь разработана для детей старшего дошкольного возраста и соответствует ФГОС ДОО. В тетради представлены &mdash; краткий теоретический материал по объектам окружающего мира, технологические карты по работе с образовательным робототехническим конструктором, логические задачи, задания, формирующие у ребёнка социально-коммуникативное, познавательное, речевое,художественно-эстетическое, физическое развитие.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0152-mu2.pdf',
        img: img2,
        title: 'Конструирование роботов с детьми 5-8 лет.',
        subtitle: 'РАБОЧАЯ ТЕТРАДЬ ДЛЯ ДЕТЕЙ СТАРШЕЙ ГРУППЫ ДОО (2 ЧАСТЬ)',
        text: 'В рабочей тетради представлено продолжение изложения краткого теоретического материала по объектам окружающего мира, технологические карты по работе с образовательным робототехническим конструктором, логические задачи, задания. Тетрадь предназначена для работы взрослых с детьми.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0241-mp.pdf',
        img: img3,
        title: 'ОСНОВЫ РОБОТОТЕХНИКИ VEX IQ 8-14 ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ УЧИТЕЛЯ',
        text: 'Пособие рассказывает о методах и примерах работы с образовательным конструктором VEX IQ, его использовании на уроках технологии, математики и информатики, а также во внеурочной деятельности. Пособие адресовано учителям начальной и основной школы, ведущим курсы технологии, информатики, физики.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0241-mu1.pdf',
        img: img4,
        title: 'ОСНОВЫ РОБОТОТЕХНИКИ VEX IQ 8-14 ЛЕТ.',
        subtitle: 'УЧЕБНО-НАГЛЯДНОЕ ПОСОБИЕ ДЛЯ УЧЕНИКА',
        text: 'Данное пособие предназначено для применения совместно с образовательным робототехническим модулем «Начальный уровень». В книге описываются возможности робототехнического модуля и области его применения. Пособие содержит информацию о назначении робототехнического набора и описание процесса сборки робота. Особое внимание уделяется вопросам подготовки учащихся к участию в робототехнических соревнованиях.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0241-mu2.pdf',
        img: img5,
        title: 'ОСНОВЫ РОБОТОТЕХНИКИ VEX IQ 8-14 ЛЕТ.',
        subtitle: 'РАБОЧАЯ ТЕТРАДЬ ДЛЯ УЧЕНИКА',
        text: 'Данное пособие было разработано в качестве дополнения к образовательной платформе VEX IQ для учащихся начальной и основной школы. Данное пособие включает 12 инструкций, которые могут использоваться последовательно, частями, а также в качестве отдельных занятий, чтобы открыть для себя мир естественных наук, технологий, инженерии и математики.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0441-m-1.pdf',
        img: img6,
        title: 'БАЗОВЫЙ УРОВЕНЬ 12-15 ЛЕТ.',
        subtitle: 'ОСНОВЫ ПРОГРАММИРОВАНИЯ МИКРОКОНТРОЛЛЕРОВ (ЧАСТЬ 1)',
        text: 'Учебное пособие является частью образовательного набора «Амперка», который позволяет освоить основы разработки собственных электронных устройств. За основу взята плата Iskra Neo, совместимая с популярной платформой для разработки Arduino, которая позволяет быстро вникнуть в суть проектирования устройств и на практике разобраться с электронными компонентами и модулями.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0441-m-2.pdf',
        img: img7,
        title: 'БАЗОВЫЙ УРОВЕНЬ 12-15 ЛЕТ.',
        subtitle: 'ОСНОВЫ РОБОТОТЕХНИКИ (ЧАСТЬ 2)',
        text: 'Данное пособие предназначено для применения совместно с образовательным робототехническим модулем «Базовый уровень», созданным на базе робототехнического конструктора VEX EDR. В пособии описываются состав и функциональные возможности робототехнического модуля и примеры его применения. Модуль оснащён программируемым контроллером, представляющим собой открытую программно-аппаратную платформу, преемственную с программируемыми контроллерами типа Arduino.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/te-0276-m.pdf',
        img: img8,
        title: 'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ 12-15 ЛЕТ.',
        subtitle: 'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ 12-15 ЛЕТ.',
        text: 'Предлагаемое пособие содержит сведения о конструировании роботов, начальные сведения о языке С, дает разбор основных алгоритмов управления. Оно поможет организовать проектную деятельность в образовательных организациях. Пособие предназначено педагогам, учащимся старших классов, студентам технических вузов. Это пособие построено как справочник, в который Вы можете заглянуть для решения какой-либо практической задачи робототехники.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0541-mp.pdf',
        img: img9,
        title: 'ПРОФЕССИОНАЛЬНЫЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ ПРЕПОДАВАТЕЛЯ',
        text: 'Пособие содержит информацию о назначении робототехнического набора и описание работ по проектированию роботов и робототехнических устройств, которые можно провести совместно с учащимися среднего школьного возраста. Пособие раскрывает базовые теоретические основы функционирования роботов, а также содержит справочную информацию по программированию систем управления роботов и робототехнических устройств, основы обработки информации и показаний датчиков. Применение образовательного робототехнического модуля «Профессиональный уровень» позволяет привить учащимся навыки и основы профессионального подхода к решению технически сложных проблем, проведения системного анализа.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0541-mu.pdf',
        img: img10,
        title: 'ПРОФЕССИОНАЛЬНЫЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ УЧЕНИКА',
        text: 'В пособии описывается процесс конструирования роботов и робототехнических устройств на базе робототехнического набора. Образовательный робототехнический модуль предназначен для обучения основам робототехники учащихся среднего школьного возраста. С помощью данного пособия учащиеся могут конструировать модели различных роботов или робототехнические устройства самостоятельно или в группах под руководством преподавателя. Применение образовательного робототехнического модуля позволяет продемонстрировать учащимся базовые основы конструирования и разработки систем управления роботов в наглядной игровой форме.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0621-mp.pdf',
        img: img11,
        title: 'ИССЛЕДОВАТЕЛЬСКИЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ ПРЕПОДАВАТЕЛЯ',
        text: 'Пособие содержит информацию о назначении робототехнического набора и описание работ по проектированию роботов и робототехнических устройств, которые можно провести совместно с учащимися среднего и старшего школьного возраста.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0621-mpr.pdf',
        img: img12,
        title: 'ИССЛЕДОВАТЕЛЬСКИЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ ПРЕПОДАВАТЕЛЯ (РЕС. НАБОР)',
        text: 'Данное пособие предназначено для применения совместно с образовательным робототехни-ческим модулем «Исследовательский уровень» ресурсный набор. В пособии описываются возможности робототехнического модуля и области его применения.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0621-mu.pdf',
        img: img13,
        title: 'ИССЛЕДОВАТЕЛЬСКИЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ УЧЕНИКА',
        text: 'Пособие демонстрирует наиболее яркие примеры проектов и работ, которые становится возможным реализовать благодаря применению образовательного робототехнического модуля «Исследовательский уровень».',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tr-0621-mur.pdf',
        img: img14,
        title: 'ИССЛЕДОВАТЕЛЬСКИЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ УЧЕНИКА (РЕС. НАБОР)',
        text: 'Данное пособие предназначено для применения совместно с образовательным робототехни-ческим модулем «Исследовательский уровень» ресурсный набор. В пособии описываются возможности робототехнического модуля и области его применения.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0712-mp.pdf',
        img: img15,
        title: 'ЭКСПЕРТНЫЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ ПРЕПОДАВАТЕЛЯ',
        text: 'Данное пособие предназначено для применения совместно с образовательным робототехническим модулем «Экспертный уровень». В пособии описываются возможности робототехнического модуля и области его применения. Данное пособие содержит детальную информацию, описывающую процесс работы с комплектующими, входящими в состав модуля, приводит примеры по подключению различных устройств и исполнительных механизмов, обработке сенсорной информации, а также основы работ с базовыми средами программирования и примеры программ, реализующих простейшие операции. Приведенная информация позволяет облегчить процесс подготовки преподавателя и учащихся к работе с образовательным робототехническим модулем.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/tv-0712-mu.pdf',
        img: img16,
        title: 'ЭКСПЕРТНЫЙ УРОВЕНЬ  14+ ЛЕТ.',
        subtitle: 'МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЛЯ УЧЕНИКА',
        text: 'В пособии содержится справочная информация по работе с комплектующими, входящими в состав образовательного робототехнического модуля, с помощью которых можно разрабатывать роботов на базе различных шасси, оснащенных различными захватными механизмами и сенсорными устройствами. В качестве дополнительных рекомендаций приводится инструкция по сборке четырех различных мобильных роботов на базе шасси с различной кинематической схемой. Пользователь может доработать любые комплектующие и разработать множество различных механизмов в соответствии с собственным проектом.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/ta-0841-mp.pdf',
        img: img17,
        title: 'РОБОТОТЕХНИЧЕСКИЙ МОДУЛЬ "АЭРО"  14+ ЛЕТ.',
        subtitle: 'УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ',
        text: 'Данное пособие предназначено для применения совместно с образовательным робототехническим модулем «АЭРО». В пособии описываются возможности робототехнического модуля и области его применения. Данное пособие используется для обучения программированию полётного контроллера, полёта по GPS, получения потокового видео с аппарата. Пособие содержит руководство по настройке и программированию контроллера, а также инструкцию по эксплуатации, разъясняет как программировать контроллер, модифицировать существующие и создавать новые программы.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/new_vex/go_book_new.pdf',
        img: img18,
        title: 'ОСНОВЫ ПРОГРАММИРОВАНИЯ И КОНСТРУИРОВАНИЯ РОБОТОВ НА БАЗЕ ПЛАТФОРМЫ VEX GO',
        subtitle: '',
        text: 'Учебное пособие является частью образовательного набора VEX GO, который позволяет освоить основы конструирования и программирования для учащихся начальной школы.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/new_vex/iq_book_new.pdf',
        img: img19,
        title: 'ОСНОВЫ ПРОГРАММИРОВАНИЯ',
        subtitle: 'В СРЕДЕ VEXcode IQ',
        text: 'Данное методическое пособие знакомит с графической средой программирования VEXcode IQ bloks. VEX IQ – это робототехнический модуль для учащихся начальных классов. Структурные части VEX IQ соединяются и разъединяются без использования инструментов, что облегчает работу учащихся, дает возможность быстро собирать и модифицировать робота. VEX IQ включает в себя датчики света, гироскоп, датчик расстояния, которые помогут не только создать больше моделей, но и сконструировать более интересных роботов, которые дают больше возможностей для обучения.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/new_vex/v5_book_new.pdf',
        img: img20,
        title: 'ОСНОВЫ ПРОГРАММИРОВАНИЯ',
        subtitle: 'В СРЕДЕ VEXcode V5.',
        text: 'Предлагаемое пособие содержит сведения о конструировании роботов, дает обзор основных алгоритмов управления. Оно поможет организовать проектную деятельность в области робототехники в образовательных организациях. VEXcode – это среда программирования, которая учитывает возрастные особенности учащихся. Интуитивно понятные вид и устройство VEXcode позволяет ученикам быстро и легко приступить к работе.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/little_bits/bits_book_new.pdf',
        img: img21,
        title: 'ИНЖЕНЕРНЫЙ НАБОР LITTLEBITS.',
        subtitle: '',
        text: 'Базовый комплект модульной электроники «Инженерный набор для учащихся» представляет собой набор электронных и структурных компонентов, предназначенных для получения углубленных знаний в области науки, технологии и инженерного проектирования путем создания различных устройств с электрическими схемами, с помощью комбинирования элементов (модулей) электроники.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/little_bits/bits_book_2_new.pdf',
        img: img22,
        title: 'НАБОР ДЛЯ ПРОГРАММИРОВАНИЯ LITTLEBITS.',
        subtitle: '',
        text: 'Базовый комплект модульной электроники «Набор для программирования» представляет собой набор электронных и структурных компонентов, предназначенных для получения базовых знаний в отрасли электроники и программирования, путем создания различных устройств с электрическими схемами, с помощью комбинирования элементов (модулей) электроники, входящих в комплект, и последующего их программирования.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/little_bits/sphero_book_new.pdf',
        img: img23,
        title: 'ОСНОВЫ ПРОГРАММИРОВАНИЯ НА ЯЗЫКЕ JAVASCRIPT.',
        subtitle: '',
        text: 'Методическое пособие содержит описание и особенности использования образовательного робототехнического набора Sphero Bolt, методику встраивания в образовательную деятельность робототехнического набора в современной школе. Рассмотрены примеры задча, лабораторных работ, проектов и программ в среде Sphero Edu.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/dobot/dobot_teacher.pdf',
        img: img24,
        title: 'УЧЕБНОЕ ПОСОБИЕ ДЛЯ УЧИТЕЛЯ',
        subtitle: 'Dobot Magician',
        text: 'Учебное пособие является частью образовательного набора Dobot Magician, который позволяет имитировать производственные процессы в рамках школьного класса.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/dobot/dobot_blockly.pdf',
        img: img25,
        title: 'ПРОГРАММИРОВАНИЕ МАНИПУЛЯТОРА',
        subtitle: 'В СРЕДЕ GOOGLE BLOCKLY',
        text: 'Данное издание поможет в организации работы на уроках робототехники. В книге предлагаются практические работы, рекомендуемые для проведения учащимися основной и средней школы физико-математического профиля. Эксперименты рассчитаны на использование учебного оборудования Dobot Magician. С помощью универсального комплекта сменных рабочих инструментов Dobot Magician способен реализовывать такие функции, как 3D-печать, лазерная гравировка, манипуляция с объектами и рисование.',
    },
    {
        link: 'http://examen-technolab.ru/instructions/dobot/dobot_python.pdf',
        img: img26,
        title: 'ПРОГРАММИРОВАНИЕ МАНИПУЛЯТОРА',
        subtitle: 'В СРЕДЕ GOOGLE PYTHON.',
        text: 'Данное издание поможет в организации работы на уроках робототехники. В книге предлагаются практические работы, рекомендуемые для проведения учащимися основной и средней школы фи-зико-математического профиля. Эксперименты рассчитаны на использование учебного оборудования Dobot Magician — многофункционального учебного комплекса для моделирования цифро-вых производственных процессов. С помощью языка программирования Python и Dobot Magician учащиеся научатся строить разнообразные геометрические объекты.',
    },
]

export default manuals;