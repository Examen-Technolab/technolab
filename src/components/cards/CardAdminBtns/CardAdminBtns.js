import style from './CardAdminBtns.module.css'

export const CardAdminBtns = ({ onEditClick, onDeleteClick, classAdd = "" }) => {

  return (

    <div className={style.btns + ' ' + classAdd}>
      <button type="button" onClick={onEditClick} title="Редактировать." className={style.btn + ' ' + style.btn_type_edit}></button>
      <button type="button" onClick={onDeleteClick} title="Удалить." className={style.btn + ' ' + style.btn_type_delete}></button>
    </div>
  );
};
