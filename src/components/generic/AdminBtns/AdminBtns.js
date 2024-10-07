import { useState } from 'react';
import style from './AdminBtns.module.css'

export const AdminBtns = ({ onEditClick, onDeleteClick, classAdd = "", withoutPopup = false }) => {

  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    onEditClick();
    setIsActive(!isActive);
  }

  return (

    <div className={style.btns + ' ' + classAdd}>
      {
        (isActive && withoutPopup) ? (
          <button type="button" onClick={onClick} title="Отмена." className={style.btn + ' ' + style.btn_type_close}></button>
        ) : (
          <button type="button" onClick={onClick} title="Редактировать." className={style.btn + ' ' + style.btn_type_edit}></button>
        )
      }
      <button type="button" onClick={onDeleteClick} title="Удалить." className={style.btn + ' ' + style.btn_type_delete}></button>
    </div>
  );
};
