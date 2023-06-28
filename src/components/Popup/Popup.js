import { useState } from "react";

function Popup(props) {
  const [popupClass, setPopupClass] = useState('');

  function handleEnter() {
    setPopupClass('popup_hover')
  }

  function handleLeave() {
    setPopupClass('')
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={props.closePopup} className={props.isVisible ? `popup ${popupClass}` : 'hidden'}>
      <div onMouseLeave={handleEnter} onMouseEnter={handleLeave} onClick={(evt) => { evt.stopPropagation(); }} className={`popup__container`}>
        {props.children}
      </div>
    </div>
  )
}
export default Popup;