import EventContent from "../EventContent/EventContent";
import LinkButton from "../LinkButton/LinkButton";

function Event(props) {
  return (
    <li className="event">
      <EventContent logo={props.logo} title={props.title} date={props.date} about={props.about}>
        {props.eventPage ?
          <div className="event__links-container">
            <LinkButton color="blue" link={props.registration} target="__blank" title="Перейти к регистрации.">Зарегистрироваться</LinkButton>
            <LinkButton link={`/events/${props.eventPage}`} title="Открыть страницу мероприятия.">Подробнее</LinkButton>
          </div> : <></>
        }
      </EventContent>
    </li>
  );
}
export default Event;