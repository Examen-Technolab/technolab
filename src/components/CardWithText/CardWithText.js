import React, { useState } from 'react';

import TileWithScroll from '../TileWithScroll/TileWithScroll';
import Description from "../Description/Description";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import api from '../../utils/Api';
import PlusButton from '../PlusButton/PlusButton';
import { appStore } from '../../stores/AppStore';
import { cardsStore } from '../../stores/CardsStore';

function CardWithText(props) {
  let { tab } = useParams();

  const [list, setList] = useState([]);

  React.useEffect(() => {
    let newList = [];
    newList = cardsStore.getCardInfo(props.cardId, tab);
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
          {/* <PlusButton /> */}
        </>
      }
    </TileWithScroll >
  );
}
export default CardWithText;