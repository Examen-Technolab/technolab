import Slider from '../Slider/Slider';

function Card(props) {

  //console.log(props.img[0].replace("-preview", ""));

  // const preview = [];
  // props.img.map((item, index) => {
  //   preview[index] = item.replace("-preview", "")
  // })


  return (
    <div className={`card card_type_${props.type} card_level_${props.level}`}>
      <Slider setPopupIsVIsible={props.setPopupIsVIsible} setPopupContent={props.setPopupContent} sliderClass="card__slider" title={props.title} img={props.img} />
      <h2 className="text text_uppercase card__title">{props.title}</h2>
      <p className="text text_uppercase card__article">Артикул: {props.article}</p>
      <p className={`text text_uppercase card__price highlighted-text highlighted-text_level_${props.level}`}>Цена: {props.price} руб.</p>
      {props.children}
    </div>
  );
}
export default Card;
