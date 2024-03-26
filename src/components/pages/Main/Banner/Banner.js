import { useEffect, useState } from 'react';

function Banner(props) {

  const btnTypes = [<>&#8741;</>, <>&#8883;</>] // содержимое кнопки 0 - пауза, 1 = старт, т.е. 0-анимация включена
  const indAnimationStates = ['', 'banner__indicator-animation']; // классы с анимацией indicator 0-нет 1-есть
  const textAnimationStates = ['banner__opacity-disappear-animation', 'banner__opacity-appear-animation']; // классы с анимацией text-container 0-нет 1-есть

  const [timer, setTimer] = useState(undefined);
  const [delay, setDelay] = useState(undefined);
  const [btnClass, setBtnClass] = useState(''); //видимость кнопки плей
  const [currentIndex, setCurrentIndex] = useState(0); //текущий индекс списка данных
  const [btnTypeIndex, setBtnTypeIndex] = useState(0); //индекс массива btnTypes
  const [animationStateIndex, setAnimationStateIndex] = useState(0); //анимация 0-выкл, 1-вкл
  const [textContainerClass, setTextContainerClass] = useState(textAnimationStates[animationStateIndex]); //класс контейнера для заупска анимации


  function animateText() {
    setTextContainerClass(textAnimationStates[1]);
    setDelay(setTimeout(() => {
      setTextContainerClass(textAnimationStates[0]);
    }, 4000, btnTypeIndex));
  }

  function startAnimation() {
    animateText();
    setAnimationStateIndex(1);
  }

  function stopTimer() {
    setAnimationStateIndex(0);
    clearTimeout(timer);
    clearTimeout(delay);
  }

  function startTimer() {
    stopTimer();
    startAnimation();
    setTimer(setTimeout(() => {
      const newIndex = currentIndex === (props.list.length - 1) ? 0 : (currentIndex + 1);
      setCurrentIndex(newIndex);
    }, 5000));
  }

  // function handleStateClick(index) {
  //   if (index !== currentIndex) {
  //     startTimer();
  //     setCurrentIndex(index);
  //   }
  // }

  function handleBtnClick() {
    stopTimer();
    const newBtnTypeIndex = +!btnTypeIndex;
    if (!newBtnTypeIndex) {
      startTimer();
    }
    setBtnTypeIndex(newBtnTypeIndex);
  }

  useEffect(() => {
    if (props.list.length > 1 && !btnTypeIndex) {
      startTimer();
    }
    return () => {
      stopTimer();
    }
  }, [currentIndex])

  // useEffect(() => {
  //   const btnTimer = setTimeout(() => {
  //     setBtnClass('');
  //   }, 5000);
  //   return () => {
  //     clearTimeout(btnTimer);
  //   }
  // }, [])

  return (
    <section className="banner">
      <div className={`banner__text-container ${textContainerClass}`}>
        <h2 className="banner__title">{props.list[currentIndex].title}</h2>
        <p className="text text_uppercase banner__text">{props.list[currentIndex].about}</p>
        <a href={props.list[currentIndex].link.link} className="link banner__link">{props.list[currentIndex].link.text} &#10230;</a>
      </div>
      {
        props.list.length === 1 ? <></> :
          <div className="banner__statebar">
            {props.list.map((item, index) => {
              return <div key={"banner_state" + index} onClick={() => {/* handleStateClick(index)*/ }} className="banner__state">
                <div className={`banner__indicator ${index === currentIndex ? indAnimationStates[animationStateIndex] : ''}`}></div>
              </div>
            })}
            {
              <button type="button" onClick={handleBtnClick} className={`banner__button ${btnClass}`}>{btnTypes[btnTypeIndex]}</button>
            }
          </div>
      }
      {props.children}
    </section >
  );
}
export default Banner;