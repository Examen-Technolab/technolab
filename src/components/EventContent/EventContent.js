import Tile from "../Tile/Tile";

function EventContent(props) {
  return (
    <>
      <Tile tileClass="event-content__item event-content__item_type_promo">
        <img src={props.logo} className="event-content__logo" alt={`Логотип ${props.title}`} />
        <h2 className="text text_uppercase event-content__title">{props.title}</h2>
        <p className="text event-content__date">{props.date}</p>
      </Tile>
      <div className="event-content__item">
        <Tile tileClass="event-content__item event-content__item_type_about">
          <p className="text event-content__about">{props.about}</p>
        </Tile>
        {props.children}
      </div>
    </>
  );
}
export default EventContent;