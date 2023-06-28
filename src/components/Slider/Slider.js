import { memo } from 'react';
import { useState } from 'react';

function Slider(props) {
  const [imgIndex, setImgIndex] = useState(props.initIndex || 0);
  const maxImgIndex = props.img.length - 1;

  function handleLeftButtonClick() {
    const newIndex = (imgIndex > 0) ? imgIndex - 1 : maxImgIndex;
    if (props.setMainImgIndex) {
      props.setMainImgIndex(newIndex)
    }
    setImgIndex(newIndex);
  }

  function handleRightButtonClick() {
    const newIndex = (imgIndex < maxImgIndex) ? imgIndex + 1 : 0;
    if (props.setMainImgIndex) {
      props.setMainImgIndex(newIndex)
    }
    setImgIndex(newIndex);
  }

  function openImgPopup() {
    props.setPopupIsVIsible(true);
    props.setPopupContent(<Slider setMainImgIndex={setImgIndex} initIndex={imgIndex} title={props.title} img={props.img} />);
    //setMainImgIndex - картинка основного слайдера, т.е. не попапа
  }

  return (
    <>
      <div className={`slider ${props.sliderClass || 'slider_big'}`}>
        <img onClick={props.sliderClass ? openImgPopup : () => { }} className={`slider__img ${props.sliderClass ? 'slider__img_button' : ''}`} alt={`Изображение набора ${props.title}`} src={props.img[imgIndex]} />
        {//props.sliderClass есть у превьюшной картинки и нет у попапа
          (maxImgIndex > 0) ? (
            <div className="slider__buttons-container">
              <button onClick={handleLeftButtonClick} className="slider__btn slider__btn_type_left">&#9668;</button>
              <ul className="slider__state-bar">
                {
                  props.img.map((item, index) => {
                    return (
                      <li className={`slider__state-item ${(index === imgIndex) ? 'slider__state-item_active' : ''}`} key={Math.random() + imgIndex}></li>
                    )
                  })
                }
              </ul>
              <button onClick={handleRightButtonClick} className="slider__btn slider__btn_type_right">&#9658;</button>
            </div>
          ) : <></>
        }
      </div>
      <button onClick={handleLeftButtonClick} className={props.sliderClass ? 'hidden' : 'slider__big-btn slider__big-btn_type_left'}>&#8249;</button>
      <button onClick={handleRightButtonClick} className={props.sliderClass ? 'hidden' : 'slider__big-btn slider__big-btn_type_right'}>&#8250;</button>
    </>
  );
}
export default memo(Slider);
