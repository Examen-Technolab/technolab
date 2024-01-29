import React, { useState } from 'react';

import TileWithScroll from '../TileWithScroll/TileWithScroll';
import Description from "../Description/Description";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import api from '../../utils/Api';
import PlusButton from '../PlusButton/PlusButton';
import { appStore } from '../../stores/AppStore';
import { cardsStore } from '../../stores/CardsStore';
import { observer } from 'mobx-react-lite';
import { popupStore } from '../../stores/PopupStore';

export const CardWithText = observer((props) => {
  let { tab } = useParams();

  const [list, setList] = useState([]);

  function onPlusBtnClick() {
    popupStore.open(props.popupContent)
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
          {appStore.isAdmin ? <PlusButton onClick={onPlusBtnClick} title='Добавить запись' /> : <></>}
        </>
      }
    </TileWithScroll >
  );
})