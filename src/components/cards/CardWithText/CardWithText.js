import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import TileWithScroll from '../../tiles/TileWithScroll/TileWithScroll';
import Description from "./Description/Description";
import api from '../../../utils/Api';
import PlusButton from '../../generic/PlusButton/PlusButton';
import { FormEditDescription } from '../../forms/FormEditDescription/FormEditDescription';


import { appStore } from '../../../stores/AppStore';
import { cardsStore } from '../../../stores/CardsStore';
import { popupStore } from '../../../stores/PopupStore';

export const CardWithText = observer((props) => {
  let { tab } = useParams();

  const [list, setList] = useState([]);
  const [element, setElement] = useState(appStore.isAdmin ? <PlusButton onClick={onPlusBtnClick} title='Добавить запись' /> : <></>);

  function onPlusBtnClick() {
    setElement(<FormEditDescription list={list} />);
  }

  React.useEffect(() => {
    setElement(appStore.isAdmin ? <PlusButton onClick={onPlusBtnClick} title='Добавить запись' /> : <></>);
  }, [appStore.isAdmin])

  React.useEffect(() => {
    setElement(appStore.isAdmin ? <PlusButton onClick={onPlusBtnClick} title='Добавить запись' /> : <></>);
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
                <Description key={props.level + 'Description' + index.toString()} level={props.level} title={item.title} list={item.list} note={item.note} />
              )
            })
          }
          {element}
        </>
      }
    </TileWithScroll >
  );
})