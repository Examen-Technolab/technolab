import { useState } from 'react'
import style from './ListInputGroup.module.css'
import { LiInput } from '../FormEditDescription/LiInput/LiInput';
import FormTextarea from '../FormTextarea/FormTextarea';

export const ListInputGroup = ({ list, setList }) => {

  const [li, setLi] = useState('');


  const onAddBtnClick = () => {
    if (li) {
      setList([...list, li]);
      setLi('');
    }
  }

  const handleDelBtnClick = (index) => {
    const a = [...list];
    a.splice(index, 1);
    setList([...a])
  }

  const handleSaveBtnClick = (val, index) => {
    const newList = [...list];
    newList[index] = val;
    setList(newList)
  }


  return (
    <div className={style.listGroup}>
      <h3>Список</h3>
      <ul>
        {
          list.map((li, index) => {
            return (
              <LiInput
                key={"input" + index}
                index={index}
                handleDelBtnClick={handleDelBtnClick}
                handleSaveBtnClick={handleSaveBtnClick}
                value={li} />
            )
          })
        }
      </ul>
      <div className={style.inputGroup}>
        <FormTextarea value={li} setValue={setLi} name="newLi" />
        <button disabled={!li} className={style.button} onClick={onAddBtnClick} type='button'>добавить</button>
      </div>
    </div>
  )
}