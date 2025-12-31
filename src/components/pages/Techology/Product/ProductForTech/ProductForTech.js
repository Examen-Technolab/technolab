import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { Card } from '../../../../cards/Card/Card';
import TileWithScroll from '../../../../generic/TileWithScroll/TileWithScroll';

import style from '../../../../cards/CardWithText/CardWithText.module.css'
import api from '../../../../../utils/Api';
import Description from '../../../../cards/CardWithText/Description/Description';

export const ProductForTech = ({ url, title, card, path, id, level }) => {

  
    const [list, setList] = useState([]);

    const [specList, setSpecList] = useState([]);
    
    const [kitList, setKitList] = useState([]);
    
    const [charList, setCharList] = useState([]);
  
    const [tab, setTab] = useState('specifications');

    const funcs = {
      'specifications': setSpecList,
      'kit':setKitList,
      'characteristic':setCharList
    }

    const lists = {
      'specifications': specList,
      'kit':kitList,
      'characteristic':charList
    }

    useEffect(() => {
      ['specifications', 'kit', 'characteristic'].forEach(tabName=>{
        const newList = [];
        api.getCardInfo(id, tabName)
        .then((data)=>{
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
          funcs[tabName](newList);
          if(tab===tabName){
            setList(newList)
          }
        })
        .catch((err) => {
          setList([]);
          console.log(err);
        })
      })
  }, []);


   useEffect(() => {
    setList(lists[tab])
  }, [tab]);

  return (
    <>
      <div className="card-with-menu">
            <Card type="with-menu" card={card}
              children={
                <>
                  <div className={`card-with-menu__pic card-with-menu__pic_level_${card.type}`}></div>
                  <div className="card-with-menu__navbar">
                    <button className={`card__link-btn card__link-btn_level_${card.type} card-with-menu__link-btn card-with-menu__link-btn_rotate ${(tab ==='specifications')? 'card-with-menu__link-btn_active':''}`} type='button'
                    onClick={()=>{setTab('specifications')}}>
                      <p className="card-with-menu__rotate-btn-text">Описание</p>
                    </button>

                    <button className={`card__link-btn card__link-btn_level_${card.type} card-with-menu__link-btn ${(tab ==='kit')? 'card-with-menu__link-btn_active':''}`} type='button'
                    onClick={()=>{setTab('kit')}}>
                    Комплектация
                    </button>

                    <button className={`card__link-btn card__link-btn_level_${card.type} card-with-menu__link-btn card-with-menu__link-btn_rotate ${(tab ==='characteristic')? 'card-with-menu__link-btn_active':''}`} type='button'
                    onClick={()=>{setTab('characteristic')}}>
                      <p className="card-with-menu__rotate-btn-text">Характеристики</p>
                    </button>
                  </div>
                </>
              } />
          </div>


      <Switch>
        {
          !!tab && 
          <TileWithScroll level={level} tileClass={style.cardWithText}>
              {
                <>
                  {

                    list.length ? 
                    list.map((item, index) => {
                      return (
                        <li className={style.cardWithText__listItem} key={level + 'Description' + index}>                          
                            <Description level={level} title={item.title} list={item.list} note={item.note} />
                        </li>

                      )
                    }): <Description level={level} title='Раздел дополняется' list={[]} note={''} />
                  } 
                </>
              }
            </TileWithScroll >
        }
        
      </Switch>
    </>
  );
}