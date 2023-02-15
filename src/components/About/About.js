import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

function About() {
    return (
        <main className="section about">
          <h1 className="title">О нас</h1>
          <div className="about__main-paragraph"><BackgroundAnimation/> <p className="text about__paragraph about__main-text"><b className="highlighted-text">ООО &laquo;Экзамен-Технолаб&raquo; </b> &mdash;&thinsp; один из&nbsp;ведущих российских
            разработчиков и&nbsp;поставщиков комплексных решений в&nbsp;сфере образования.
            </p></div>
          <p className="text about__paragraph about__modules">Образовательные робототехнические модули предназначены для освоения базовых навыков в&nbsp;области проектирования  различных объектов, направлены на&nbsp;развитие у&nbsp;учащихся любознательности и&nbsp;интереса к&nbsp;технике для освоения  начальных навыков в&nbsp;области проектирования и&nbsp;программирования простейших роботов и&nbsp;робототехнических устройств.</p>
          <p className="text about__paragraph">Каждый модуль&nbsp;&mdash; это продукт, разработанный специально для учебных целей, и&nbsp;предназначенный в&nbsp;первую очередь для применения в&nbsp;рамках программ начального и&nbsp;среднего образования во&nbsp;внеклассной работе с&nbsp;учащимися, а&nbsp;также для оснащения учебных технопарков.</p>
          <p className="text about__paragraph">Образовательные робототехнические модули наглядно демонстрируют различные междисциплинарные основы робототехники, механики информационных систем и&nbsp;устройств, разработки алгоритмов и&nbsp;программного обеспечения.</p>
        </main>
    );
}
export default About;