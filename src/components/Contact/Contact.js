import Tile from "../Tile/Tile";

function Contact(props) {
  return (
    <Tile linkTitle={props.linkTitle} tileClass={props.tileClass} link={props.link} >
      <h2 className="text text_uppercase contact__title">{props.title}</h2>
      <p className=" text contact__text">{props.text}</p>
      <div className={`contact__icon contact__icon_type_${props.type}`}></div>
    </Tile>
  );
}
export default Contact;