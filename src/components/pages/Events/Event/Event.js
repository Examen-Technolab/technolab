import { useEffect, useState } from "react";
import DoubleTile from "../../../generic/DoubleTile/DoubleTile";
import { appStore } from "../../../../stores/AppStore";

import { AdminBtns } from "../../../generic/AdminBtns/AdminBtns";
import { popupStore } from "../../../../stores/PopupStore";
import { FormAddEvent } from "../../../forms/FormAddEvent/FormAddEvent";
import Form from "../../../forms/Form/Form";
import { eventsStore } from "../../../../stores/EventsStore";
import api from "../../../../utils/Api";

export const Event = ({ eventData }) => {

  const [links, setLinks] = useState([]);

  const onEditClick = () => {
    popupStore.open(<FormAddEvent eventData={eventData} />);
  }

  const onDeleteClick = () => {
    function handleSubmit() {
      appStore.setLoading(true);
      api.deleteEvent(eventData.id)
        .then(() => {
          eventsStore.deleteEvent(eventData.id);
        })
        .finally(() => {
          popupStore.close();
          appStore.setLoading(false)
        })
    }
    popupStore.open(<>
      <p>Вы уверены? Это действие нельзя отменить</p>
      <Form btn="Удалить"
        onFormSubmit={handleSubmit} />
    </>);
  }


  useEffect(() => {

    //определяем ссылки
    const newLinks = eventData.withPage ? [
      {
        link: `/events/${eventData.code}`,
        linkTitle: 'Открыть страницу мероприятия.',
        title: 'Подробнее',
      },
    ] : [];
    //для регистрации
    if (eventData.btnLink && !eventData.isArchived)
      newLinks.unshift({
        color: 'blue',
        link: eventData.btnLink,
        linkTitle: eventData.btnText,
        title: eventData.btnText,
        target: '__blank',
      });

    //для результатов
    if (eventData.code && eventData.isArchived && eventData.isLinkResult)
      newLinks.unshift({
        color: 'blue',
        link: eventData.btnLink,
        linkTitle: eventData.btnText,
        title: eventData.btnText,
        target: '__blank',
      });

    setLinks(newLinks)

  }, [])

  return (
    <li className="event">
      {
        appStore.isAdmin && (
          <AdminBtns
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        )
      }
      <DoubleTile
        promo={
          <>
            <img src={eventData.logo} className={`event__logo ${eventData.isArchived ? 'grayscale' : ''}`} alt={`Логотип ${eventData.title}`} />
            <h2 className={`text text_uppercase event__title ${eventData.isArchived ? 'grayscale' : ''}`}>{eventData.title}</h2>
            <p className="event__date">{eventData.date}</p>
            <p className={eventData.isArchived ? 'text event__archive' : 'hidden'}>архив</p>
          </>
        }
        about={
          <>
            <p className="event__about">{eventData.about}</p>
          </>
        }
        links={links}
      />
    </li>
  );
}
export default Event;