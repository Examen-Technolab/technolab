import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import { popupStore } from "../../../stores/PopupStore";

import style from "./Popup.module.css"

export const Popup = observer(() => {

  //обработка клавиш для попапа
  useEffect(() => {
    if (popupStore.isVisible) {
      document.addEventListener('keydown', popupStore.handleKeydown);
    } else {
      document.removeEventListener('keydown', popupStore.handleKeydown);
    }
  })

  const [isHover, setIshover] = useState(false);

  function handleEnter() {
    setIshover(true);
  }

  function handleLeave() {
    setIshover(false);
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={popupStore.close}
      className={popupStore.isVisible ? style.popup + ` ${isHover ? style.popup_hover : ''}` : ''}
      hidden={!popupStore.isVisible} >
      <div onMouseLeave={handleEnter} onMouseEnter={handleLeave} onClick={(evt) => { evt.stopPropagation(); }} className={style.container}>
        <button className={style.closeBtn} type="button" onClick={popupStore.close}>&#10006;</button>
        {popupStore.content}
      </div>
    </div>
  )

})