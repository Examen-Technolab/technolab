import DoubleTile from "../../../generic/DoubleTile/DoubleTile";

function Event(props) {
  return (
    <li className="event">
      <DoubleTile
        promo={
          <>
            <img src={props.logo} className={`event__logo ${props.isArchived ? 'grayscale' : ''}`} alt={`Логотип ${props.title}`} />
            <h2 className={`text text_uppercase event__title ${props.isArchived ? 'grayscale' : ''}`}>{props.title}</h2>
            <p className="text event__date">{props.date}</p>
            <p className={props.isArchived ? 'text event__archive' : 'hidden'}>архив</p>
          </>
        }
        about={
          <>
            <p className="text event__about">{props.about}</p>
          </>
        }
        links={
          props.eventPage ?
            [
              {
                color: 'blue',
                link: props.link.link,
                linkTitle: props.link.linkTitle,
                title: props.link.title,
                target: '__blank',
              },
              {
                link: `/events/${props.eventPage + (props.isArchived ? '-archive' : '')}`,
                linkTitle: 'Открыть страницу мероприятия.',
                title: 'Подробнее',
              },
            ] :
            props.isArchived ?
              [
                {
                  link: props.link.link,
                  linkTitle: props.link.linkTitle,
                  title: props.link.title,
                  target: '__blank',
                },
              ]
              : []
        } />
    </li>
  );
}
export default Event;