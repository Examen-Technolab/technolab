import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import TileWithScroll from '../../generic/TileWithScroll/TileWithScroll';
import Description from "./Description/Description";
import api from '../../../utils/Api';
import PlusButton from '../../generic/PlusButton/PlusButton';
import { FormEditDescription } from '../../forms/FormEditDescription/FormEditDescription';


import { appStore } from '../../../stores/AppStore';
import { cardsStore } from '../../../stores/CardsStore';
import { AdminBtns } from '../../generic/AdminBtns/AdminBtns';
import { popupStore } from '../../../stores/PopupStore';
import Form from '../../forms/Form/Form';

import style from './CardWithText.module.css'

export const CardWithText = observer((props) => {
  let { tab } = useParams();

  const plusElement = <PlusButton onClick={onPlusBtnClick} title='Добавить запись' />

  const [list, setList] = useState([]);
  const [element, setElement] = useState(plusElement);
  const [editIndex, setEditIndex] = useState(false);


  function onPlusBtnClick() {
    setElement(
      <div className={style.formContainer}>
        <button className={style.closeBtn} type='button' onClick={() => { setElement(plusElement) }}></button>
        <FormEditDescription submitHandler={addHandler} />
      </div>);
  }

  function addHandler(info) {
    appStore.setLoading(true);

    const data = {
      card_id: props.cardId,
      ...info
    }
    api.postCardInfo(data)
      .then(res => {
        if (res.ok) {
          const newList = [...list];
          newList.push(data);
          setList(newList);
        }
      })
      .finally(() => {
        appStore.setLoading(false);
        setElement(plusElement);
        window.location.reload();
      })
  }

  function editHandler(info) {

    appStore.setLoading(true);

    const data = {
      card_id: props.cardId,
      ...info
    }
    api.patchCardInfo(info.id, data)
      .then(res => {
        if (res) {
          data.list = data.list.split("','");
          const newList = [...list];
          const index = newList.findIndex(item => item.id === info.id)
          newList.splice(index, 1, data);

          setList(newList);
        }
      })
      .finally(() => {
        appStore.setLoading(false);
        setEditIndex(false);
        window.location.reload();
      })
  }

  function onDeleteClick(index) {
    function handleSubmit() {
      appStore.setLoading(true);
      api.deleteCardInfo(list[index].id)
        .then(data => {
          if (data.ok) {
            const newList = [...list];
            newList.splice(index, 1);
            setList(newList);
            popupStore.close();
            appStore.setLoading(false);
            window.location.reload();
          }
        })
    }

    popupStore.open(<>
      <p>Вы уверены? Это действие нельзя отменить</p>
      <Form btn="Удалить"
        onFormSubmit={handleSubmit} />
    </>);
  }

  function onEditClick(index) {
    setEditIndex(editIndex === index ? false : index)
  }


  React.useEffect(() => {
    let newList = cardsStore.getCardInfo(tab);
    if (newList.length) {
      setList(newList);
    } else {
      appStore.setLoading(true);
      api.getCardInfo(props.cardId, tab)
        .then((data) => {
          data.forEach(element => {
            newList.push({
              id: element.id,
              title: element.title,
              list: element.list == null ? [] : element.list.split("','"),
              note: element.note,
              tab: element.tab,
              sort: element.sort
            })
          });
          setList(newList);
          cardsStore.setCardInfo(props.cardId, tab, newList);
        })
        .catch((err) => {
          setList([]);
          console.log(err);
        })
        .finally(() => {
          appStore.setLoading(false);
        })
    }
  }, [tab, props.cardId]);


  return (
    <TileWithScroll level={props.level} tileClass={style.cardWithText}>
      {
        <>
          {
            list.map((item, index) => {
              return (
                <li className={style.cardWithText__listItem} key={props.level + 'Description' + index}>
                  {!!appStore.isAdmin &&
                    (
                      <>
                        <p className={style.sort}>Положение в списке:{item.sort}</p>
                        <AdminBtns
                          onEditClick={() => { onEditClick(index) }}
                          onDeleteClick={() => { onDeleteClick(index) }}
                          classAdd={style.cardWithText__btns}
                          withoutPopup
                        />
                      </>

                    )
                  }

                  {
                    editIndex === index ?
                      <FormEditDescription submitHandler={editHandler} item={item} />
                      : <Description level={props.level} title={item.title} list={item.list} note={item.note} />
                  }


                </li>

              )
            })
          }
          {
            !!appStore.isAdmin && element
          }
        </>
      }
    </TileWithScroll >
  );
})