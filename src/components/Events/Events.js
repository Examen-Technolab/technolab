import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Event from '../Event/Event';
import Tile from '../Tile/Tile';

import eventList from '../../utils/eventList';
import { vkLink } from '../../utils/constants';

function Events() {

  function getDate(item) {
    const lastDay = new Date();
    lastDay.setFullYear(item.lastDay.year, item.lastDay.month - 1, item.lastDay.day);
    return lastDay;
  }

  function splitEvents(list) {
    const today = new Date();

    list.sort((x, y) => getDate(x) - getDate(y));

    const midIndex = list.findIndex((item) => {
      const lastDay = getDate(item);
      return today.getTime() <= lastDay.getTime()
    })

    if ((midIndex < 0)) {
      if (today.getTime() <= getDate(list[0]).getTime()) return [list, []];
      else return [[], list.reverse()]
    } else return [list.slice(midIndex), list.slice(0, midIndex).reverse()];
  }

  const [upcomingEvents, archive] = splitEvents(eventList);

  return (
    <main className="section events">
      <Tile tileClass="events__title-tile">
        <BackgroundAnimation color="blue" />
        <h1 className="text text_uppercase events__title">Мероприятия 2023 год.</h1>
      </Tile>
      <ul className="events__list">
        {
          upcomingEvents.map(item => {
            return (
              <Event isArchived={false} link={item.registration} key={item.title} eventPage={item.eventPage} logo={item.logo} title={item.title} date={item.date} about={item.about} />
            )
          })
        }
        {
          archive.map(item => {
            return (
              <Event eventPage={item.eventPage} link={item.results || vkLink} isArchived={true} key={item.title} logo={item.logo} title={item.title} date={item.date} about={item.about} />
            )
          })
        }
      </ul>
    </main>
  );
}
export default Events;