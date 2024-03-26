import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Tile from '../../tiles/Tile/Tile';
import eventList from '../../../utils/eventList';
import TileWithScroll from '../../tiles/TileWithScroll/TileWithScroll';
import Paragraph from './Paragraph/Paragraph';

import table from '../../../images/events/table-bridge.png'

function EventPage(props) {
  const { eventUrl } = useParams();
  const eventPage = eventUrl.replace("-archive", "");
  const eventData = eventList.find(item => item.eventPage === eventPage);

  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  useEffect(() => {
    eventData.links.unshift(eventUrl === eventPage ? eventData.registration : eventData.results);
  }, [])

  return (
    <main className="section event-page">
      <h1 className="hidden">{eventPage}</h1>
      <button type="button" onClick={handleClick} className="event-page__back-btn">
        <Tile>
          <p className="text text_uppercase event-page__back-btn-text">
            &#9668; Назад
          </p>
        </Tile>
      </button>
      <Tile tileClass="event-page__title-tile">
        <img src={eventData.logo} className="event-page__logo" alt={`Логотип ${eventData.cardTitle}`} />
        <h1 className="event-page__title">{eventData.cardTitle}</h1>
      </Tile>
      <ul className="event-page__list">
        {eventData.links.map(item => {
          return (
            <li key={item.title}>
              <Tile tileClass={`event-page__link event-page__link_type_${item.type}`} link={item.link} linkTitle={item.linkTitle}>
                <p className="text text_uppercase event-page__link-text">{item.title}</p>
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
              <Paragraph key={item.title} title={item.title} text={item.text} />
            )
          })
        }
        <h3 className="paragraph__title highlighted-text event-page__scores">{eventData.table.title}</h3>
        <img className="event-page__table" src={table} alt="Таблица начислений очков" />
      </TileWithScroll>
    </main >
  );
}
export default EventPage;