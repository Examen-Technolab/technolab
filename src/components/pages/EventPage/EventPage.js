import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Tile from '../../generic/Tile/Tile';
import TileWithScroll from '../../generic/TileWithScroll/TileWithScroll';
import Paragraph from './Paragraph/Paragraph';

import table from '../../../images/events/table-bridge.png'

import { appStore } from '../../../stores/AppStore';
import { eventsStore } from '../../../stores/EventsStore';
import api from '../../../utils/Api';


function EventPage(props) {

  const { eventUrl } = useParams();

  const [eventData, setEventData] = useState({ links: [], description: [] });

  const [links, setLinks] = useState([]);

  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  useEffect(() => {
    appStore.setLoading(true);

    api.getData('events')
      .then(data => {
        const list = eventsStore.formLists(data);

        const item = list.find(item => item.code === eventUrl);

        if (item) {

          const event = { ...item };
          event.description = JSON.parse(event.description);
          event.links = JSON.parse(event.links);


          setEventData(event);
          const newLinks = [...event.links];
          if (event.btnLink) {
            if (!event.isArchived) {
              newLinks.unshift({ body: event.btnLink, title: event.btnText || 'Регистрация', type: 'highlighted' })
            } else if (event.isLinkResult) {
              newLinks.unshift({ body: event.btnLink, title: event.btnText || 'Результаты', type: 'highlighted' })
            }
          }
          setLinks([...newLinks]);
        } else window.location.replace('/notFound');
      })
      .finally(() => {
        appStore.setLoading(false);
      })


  }, [])


  return (
    <main className="section event-page">
      <h1 className="hidden">{eventData.title}</h1>
      <button type="button" onClick={handleClick} className="event-page__back-btn">
        <Tile>
          <p className="text_uppercase event-page__back-btn-text">
            &#9668; Назад
          </p>
        </Tile>
      </button>
      <Tile tileClass="event-page__title-tile">
        <img src={eventData.logo} className="event-page__logo" alt={`Логотип ${eventData.title}`} />
        <h1 className="event-page__title">{eventData.title}</h1>
      </Tile>
      <ul className="event-page__list">
        {links.map(item => {
          return (
            <li key={item.title}>
              <Tile tileClass={`event-page__link event-page__link_type_${item.type}`} link={item.body} linkTitle={item.title}>
                <p className="text_uppercase event-page__link-text">{item.title}</p>
              </Tile>
            </li>
          )
        })}
      </ul>
      <TileWithScroll tileClass="event-page__about">
        <h2 className="hidden">Описание</h2>
        {
          eventData.description.map(item => {
            return (
              <Paragraph key={item.title} title={item.title} text={item.body} />
            )
          })
        }
        {/* <h3 className="paragraph__title highlighted-text event-page__scores">{eventData.table.title}</h3>
        <img className="event-page__table" src={eventData.table.src} alt="Таблица начислений очков" /> */}
      </TileWithScroll>
    </main >
  );
}
export default EventPage;