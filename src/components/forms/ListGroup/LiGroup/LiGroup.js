import style from './LiGroup.module.css';

import { useEffect, useState } from 'react';


export const LiGroup = ({ index, value, handleDelBtnClick, handleSaveBtnClick, InputComponent }) => {

  const [newValue, setNewValue] = useState(value);
  const [disabled, setDisabled] = useState(true);

  const handleEditBtnClick = () => {
    setDisabled(false);
  }

  const onSave = () => {
    setDisabled(true);
    handleSaveBtnClick(newValue, index)
  }


  const onDelete = () => {
    handleDelBtnClick(index)
  }

  useEffect(() => {
    setNewValue(value)
  }, [value])


  return (
    <li className={style.li}>
      <InputComponent name={'input' + index} setValue={setNewValue} disabled={disabled} value={newValue} />

      <button className={style.saveBtn} type='button' onClick={disabled ? handleEditBtnClick : onSave}>{disabled ? 'Изменить' : 'Сохранить'}</button>
      <button className={style.delBtn} type='button' onClick={onDelete}>Удалить</button>
    </li>
  )
}