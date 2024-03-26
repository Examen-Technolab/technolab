import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { popupStore } from "../../stores/PopupStore";

export const Popup = observer(() => {

  useEffect(() => {
    if (popupStore.isVisible) {
      document.addEventListener('keydown', popupStore.handleKeydown);
    } else {
      document.removeEventListener('keydown', popupStore.handleKeydown);
    }
  }, [popupStore.isVisible])

  const [popupClass, setPopupClass] = useState('');

  function handleEnter() {
    setPopupClass('popup_hover')
  }

  function handleLeave() {
    setPopupClass('')
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={popupStore.close} className={popupStore.isVisible ? `popup ${popupClass}` : 'hidden'}>
      <div onMouseLeave={handleEnter} onMouseEnter={handleLeave} onClick={(evt) => { evt.stopPropagation(); }} className={`popup__container`}>
        {popupStore.content}
      </div>
    </div>
  )

})