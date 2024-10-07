import { useState } from 'react'
import style from './ListGroup.module.css'
import { LiGroup } from './LiGroup/LiGroup';

export const ListGroup = ({ title, list, setList, defaultValue, ComponentName }) => {

  const [li, setLi] = useState(defaultValue);



  const onAddBtnClick = () => {
    if (JSON.stringify(li) !== JSON.stringify(defaultValue)) {
      setList([...list, li]);
      setLi(defaultValue);
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
      <h3>{title}</h3>
      <ul>
        {
          !!list.length && list.map((item, index) => {
            return (
              <LiGroup
                key={"input" + index}
                index={index}
                handleDelBtnClick={handleDelBtnClick}
                handleSaveBtnClick={handleSaveBtnClick}
                value={item}
                InputComponent={ComponentName}
              />
            )
          })
        }
      </ul>
      <div className={style.inputGroup}>
        <ComponentName value={li} setValue={setLi} name="newLi" />
        <button disabled={JSON.stringify(li) === JSON.stringify(defaultValue)} className={style.button} onClick={onAddBtnClick} type='button'>добавить</button>
      </div>
    </div>
  )
}