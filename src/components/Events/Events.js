import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Event from '../Event/Event';
import Tile from '../Tile/Tile';

import eventList from '../../utils/eventList';

function Events() {
  const today = new Date();

  return (
    <main className="section events">
      <Tile tileClass="events__title-tile">
        <BackgroundAnimation color="blue" />
        <h1 className="text text_uppercase events__title">Мероприятия 2023 год.</h1>
      </Tile>
      <ul className="events__list">
        {
          eventList.map(item => {
            const lastDay = new Date();
            lastDay.setFullYear(item.lastDay.year, item.lastDay.month - 1, item.lastDay.day);
            if (today.getTime() <= lastDay.getTime())
              return (
                <Event registration={item.registration} key={item.title} eventPage={item.eventPage} logo={item.logo} title={item.title} date={item.date} about={item.about} />
              )
          })
        }
      </ul>
    </main>
  );
}
export default Events;