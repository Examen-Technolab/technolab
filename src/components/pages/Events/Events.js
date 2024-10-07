import React from 'react';
import { observer } from 'mobx-react-lite';

import BackgroundAnimation from '../../generic/BackgroundAnimation/BackgroundAnimation';
import { Event } from './Event/Event';
import Tile from '../../generic/Tile/Tile';

import PlusButton from '../../generic/PlusButton/PlusButton';

import { appStore } from '../../../stores/AppStore';
import { popupStore } from '../../../stores/PopupStore';
import { FormAddEvent } from '../../forms/FormAddEvent/FormAddEvent';
import { eventsStore } from '../../../stores/EventsStore';
import api from '../../../utils/Api';

export const Events = observer(() => {

  function onPlusBtnClick() {
    popupStore.open(<FormAddEvent />);
  }


  React.useEffect(() => {
    appStore.setLoading(true);
    api.getData('events')
      .then(data => {
        eventsStore.formLists(data);
      })
      .finally(() => appStore.setLoading(false))

  }, []);

  return (
    <main className="section events">

      <Tile tileClass="events__title-tile">
        <BackgroundAnimation color="blue" />
        <h1 className="text_uppercase events__title">Мероприятия {new Date().getFullYear()} год</h1>
      </Tile>

      {
        appStore.isLoggedIn &&
        <PlusButton title="Добавить карточку."
          onClick={onPlusBtnClick} />
      }

      <ul className="events__list">
        {

          eventsStore.events.length ?
            eventsStore.events.map((item, index) => {
              return (
                <Event key={item.title + index} eventData={item} />
              )
            }) :
            <img className="events__banner" src="/images/banner/events.svg" alt="Мероприятий нет" />
        }
      </ul>
    </main>
  );
})