import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { popupStore } from '../../stores/PopupStore';
import { useEffect } from 'react';

export const Slider = observer((props) => {

  const [imgIndex, setImgIndex] = useState(props.initIndex || 0);
  const maxImgIndex = props.img.length - 1;

  function handleLeftButtonClick() {
    const newIndex = (imgIndex > 0) ? imgIndex - 1 : maxImgIndex;
    setImgIndex(newIndex);
  }

  function handleRightButtonClick() {
    const newIndex = (imgIndex < maxImgIndex) ? imgIndex + 1 : 0;
    setImgIndex(newIndex);
  }

  function openImgPopup() {
    popupStore.open();
    popupStore.setContent(<Slider initIndex={imgIndex} title={props.title} img={props.img} />)
  }



  return (
    <>
      <div className={`slider ${props.sliderClass || 'slider_big'}`}>
        <img onClick={props.sliderClass ? openImgPopup : () => { }} className={`slider__img ${props.sliderClass ? 'slider__img_button' : ''}`} alt={`Изображение набора ${props.title}`} src={props.sliderClass ? props.img[imgIndex] : props.img[imgIndex].replace("-preview", "")} />
        {//props.sliderClass есть у превьюшной картинки и нет у попапа
          (maxImgIndex > 0) ? (
            <div className="slider__buttons-container">
              <button type="button" onClick={handleLeftButtonClick} className="slider__btn slider__btn_type_left">&#9668;</button>
              <ul className="slider__state-bar">
                {
                  props.img.map((item, index) => {
                    return (
                      <li className={`slider__state-item ${(index === imgIndex) ? 'slider__state-item_active' : ''}`} key={Math.random() + imgIndex}></li>
                    )
                  })
                }
              </ul>
              <button type="button" onClick={handleRightButtonClick} className="slider__btn slider__btn_type_right">&#9658;</button>
            </div>
          ) : <></>
        }
      </div>
      {(maxImgIndex > 0) ? (
        <>
          <button type="button" onClick={handleLeftButtonClick} className={props.sliderClass ? 'hidden' : 'slider__big-btn slider__big-btn_type_left'}>&#8249;</button>
          <button type="button" onClick={handleRightButtonClick} className={props.sliderClass ? 'hidden' : 'slider__big-btn slider__big-btn_type_right'}>&#8250;</button>
        </>
      ) : <></>}
    </>
  );
})
