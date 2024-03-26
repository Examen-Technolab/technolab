import React from 'react';

import BackgroundAnimation from '../../generic/BackgroundAnimation/BackgroundAnimation';
import Event from './Event/Event';
import Tile from '../../generic/Tile/Tile';

import banner from '../../../images/events.svg';

import eventList from '../../../utils/eventList';
import { vkLink } from '../../../utils/constants';


import { FullScreenBanner } from '../FullScreenBanner/FullScreenBanner';

function Events() {

  // React.useEffect(() => {
  //   appStore.setLoading(true);
  //   api.getList(list, setList, 'contacts', () => {
  //     appStore.setLoading(false);
  //   });
  // }, []);

  function getDate(item) {
    //переводит в полную дату объект с полями year, month, day
    const lastDay = new Date();
    lastDay.setFullYear(item.lastDay.year, item.lastDay.month - 1, item.lastDay.day);
    return lastDay;
  }

  function splitEvents(list) {
    //делит список на архив и предстоящие события, возвращает массив двух массивов
    //архив отсортирован по убыванию даты, а предстоящие по возрастанию даты
    const today = new Date();

    //сортировка по дате окончания
    list.sort((x, y) => getDate(x) - getDate(y));

    //поиск индекса границы между архивом и предстоящими событиями
    let midIndex;

    //если индекс не найден, то не делим, иначе делим

    if (today.getTime() > getDate(list[list.length - 1]).getTime()) {
      midIndex = list.length - 1;
    } else if (today.getTime() <= getDate(list[0]).getTime()) {
      midIndex = 0;
    } else {
      midIndex = list.findIndex((item) => {
        const lastDay = getDate(item);
        return today.getTime() <= lastDay.getTime()
      })
    }
    return {
      upcoming: list.slice(midIndex),
      archive: list.slice(0, midIndex).reverse()
    }



    // console.log('erty');
    // console.log(list);
    // console.log(today.getTime() > getDate(list[list.length - 1]).getTime())
    // if ((midIndex < 0)) {
    //   if (today.getTime() <= getDate(list[0]).getTime()) return [list, []];
    //   else return [[], list.reverse()]
    // } else return [list.slice(midIndex), list.slice(0, midIndex).reverse()];





  }

  const [list, setList] = React.useState(eventList);
  const [upcoming, setUpcoming] = React.useState([]);
  const [archive, setArchive] = React.useState([]);

  React.useEffect(() => {
    const today = new Date();
    let newList = list.filter((x) => today.getFullYear() === getDate(x).getFullYear());
    setList(newList);
    if (newList.length) {
      const split = splitEvents(newList);
      setUpcoming(split.upcoming);
      setArchive(split.archive);
    }
  }, []);

  return (
    <main className="section events">
      {
        list.length ? <>
          <Tile tileClass="events__title-tile">
            <BackgroundAnimation color="blue" />
            <h1 className="text text_uppercase events__title">Мероприятия {new Date().getFullYear()} год</h1>
          </Tile>
          <ul className="events__list">
            {
              upcoming.map(item => {
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
          </ul></> :
          <FullScreenBanner src={banner} alt="Актуальных мероприятий нет" />
      }
    </main>
  );
}
export default Events;