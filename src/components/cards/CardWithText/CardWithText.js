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
import { CardAdminBtns } from '../CardAdminBtns/CardAdminBtns';
import { popupStore } from '../../../stores/PopupStore';
import Form from '../../forms/Form/Form';

export const CardWithText = observer((props) => {
  let { tab } = useParams();

  const plusElement = <PlusButton onClick={onPlusBtnClick} title='Добавить запись' />

  const [list, setList] = useState([]);
  const [element, setElement] = useState(plusElement);
  const [editIndex, setEditIndex] = useState(false);


  function onPlusBtnClick() {
    setElement(<FormEditDescription addHandler={addHandler} />);
  }

  function addHandler(info) {
    appStore.setLoading(true);

    const data = {
      card_id: props.cardId,
      tab: tab,
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
        setElement(plusElement)
      })
  }

  function editHandler(info) {

    console.log(info)
    appStore.setLoading(true);

    const data = {
      card_id: props.cardId,
      tab: tab,
      ...info
    }
    api.patchCardInfo(info.id, data)
      .then(res => {
        if (res) {
          data.list = data.list.split("','");
          const newList = [...list];
          const index = newList.findIndex(item => item.id === info.id)
          newList.splice(index, 1, data);

          console.log(list)
          console.log(newList)
          setList(newList);
        }
      })
      .finally(() => {
        appStore.setLoading(false);
        setEditIndex(false)
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
    setEditIndex(index)
  }


  React.useEffect(() => {
    let newList = [];
    newList = cardsStore.getCardInfo(tab);
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
            })
          });
          setList(newList);
          cardsStore.setCardInfo(props.cardId, tab, newList);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          appStore.setLoading(false);
        })
    }
  }, [tab]);

  return (
    <TileWithScroll level={props.level} tileClass="card-with-text">
      {
        <>
          {
            list.map((item, index) => {
              return (
                <li className='card-with-text__list-item' key={props.level + 'Description' + index}>
                  {appStore.isAdmin ?
                    <CardAdminBtns
                      onEditClick={() => { onEditClick(index) }}
                      onDeleteClick={() => { onDeleteClick(index) }}
                      classAdd="card-with-text__admin-btns"
                    />
                    : <></>
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
            appStore.isAdmin ? element : ''
          }
        </>
      }
    </TileWithScroll >
  );
})