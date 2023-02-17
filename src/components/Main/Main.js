import React from 'react';

import MainLink from '../MainLink/MainLink';
import boardImg from '../../images/main-board.png';

function Main() {
  const [preliminaryAnimation, setPreliminaryAnimation] = React.useState('');
  const [elementaryAnimation, setElementaryAnimation] = React.useState('');
  const [basicAnimation, setBasicAnimation] = React.useState('');
  const [professionalAnimation, setProfessionalAnimation] = React.useState('');
  const [researchAnimation, setResearchAnimation] = React.useState('');
  const [aeroAnimation, setAeroAnimation] = React.useState('');
  const setAnimation = [setPreliminaryAnimation, setElementaryAnimation, setBasicAnimation, setProfessionalAnimation, setResearchAnimation, setAeroAnimation];

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setAnimation[i]('');
      if (i < (setAnimation.length - 1)) i++; else i = 0;
      setAnimation[i]('scale');
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main">
      <div className="main__banner">
        <h1 className="text main__title">Робототехнические модули</h1>
        <a href="#main__info" className="link main__link">Узнать больше &#10230;</a>
      </div>
      <div className="main__navbar">
        <MainLink animation={preliminaryAnimation} level="preliminary" title="Предварительный уровень" />
        <MainLink animation={elementaryAnimation} level="elementary" title="Начальный уровень" />
        <MainLink animation={basicAnimation} level="basic" title="Базовый уровень" />
        <MainLink animation={professionalAnimation} level="professional" title="Профессиональный уровень" />
        <MainLink animation={researchAnimation} level="research" title="Исследовательский уровень" />
        <MainLink animation={aeroAnimation} level="aero" title="Аэро" />
      </div>
      <div id="main__info" className="main__info">
        <div className="main__triangle rotation"></div>
        <div className="main__triangle main__triangle_bot rotation"></div>
        <p className="text main__info-text"> <b>Образовательные робототехнические модули</b> предназначены для освоения базовых навыков в&nbsp;области проектирования различных объектов, направлены на&nbsp;развитие у&nbsp;учащихся любознательности и&nbsp;интереса к&nbsp;технике, для освоения начальных навыков в&nbsp;области проектирования и программирования простейших роботов и&nbsp;робототехнических устройств.</p>
        <p className="text main__info-text"><b>Каждый модуль&nbsp;&mdash;</b> это продукт, разработанный специально для учебных целей, и&nbsp;предназначенный в&nbsp;первую очередь для применения в&nbsp;рамках программ начального и&nbsp;среднего образования во&nbsp;внеклассной работе с&nbsp;учащимися, а&nbsp;также для оснащения учебных технопарков.</p>
        <div className="main__board">
          <img className="main__board-img" src={boardImg} alt="конструктивные компоненты + элементы механики + электронные компоненты + методические указания" />
        </div>
      </div>
    </main>
  );
}
export default Main;