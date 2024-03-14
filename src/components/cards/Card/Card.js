import { observer } from 'mobx-react-lite';
import { Slider } from '../../Slider/Slider';
import { appStore } from '../../../stores/AppStore';
import { popupStore } from '../../../stores/PopupStore';
import { FormAddCard } from '../../forms/FormAddCard/FormAddCard';
import Form from '../../forms/Form/Form';
import { cardsStore } from '../../../stores/CardsStore';

export const Card = observer((props) => {

  function onEditClick() {
    popupStore.open(<FormAddCard card={card} isEdit={true} />);
  }

  function onDeleteClick() {
    function handleSubmit() {
      cardsStore.deleteCard(card.id);
      popupStore.close();
      if (window.location.pathname !== '/catalog')
        window.location.replace('/catalog')
    }
    popupStore.open(<>
      <p className="text">Вы уверены? Это действие нельзя отменить</p>
      <Form btn="Удалить"
        onFormSubmit={handleSubmit} />
    </>);
  }

  function formPreviews(fileName, lastIndex, directory) {
    const previews = ['https://examen-technolab.ru/images/cards/' + directory + '/' + fileName];
    for (let i = 1; i <= lastIndex; i++) {
      const pointIndex = previews[0].lastIndexOf('.');
      previews.push(previews[0].slice(0, pointIndex) + `-${i}` + previews[0].slice(pointIndex, previews[0].length));
    }

    return previews;
  }

  const card = props.card;


  // формируем массив превьюшек
  const previews = formPreviews(card.preview, card.lastPreview, card.product);


  //console.log(props.img[0].replace("-preview", ""));

  // const preview = [];
  // props.img.map((item, index) => {
  //   preview[index] = item.replace("-preview", "")
  // })


  return (
    <div className={`card card_type_${props.type} card_level_${card.type}`}>
      {
        appStore.isLoggedIn ?
          <div className="card__admin-btns">
            <button type="button" onClick={onEditClick} title="Редактировать." className="card__admin-btn card__admin-btn_type_edit"></button>
            <button type="button" onClick={onDeleteClick} title="Удалить." className="card__admin-btn card__admin-btn_type_delete"></button>
          </div> : <></>
      }
      <Slider sliderClass="card__slider" title={card.title} img={previews} />
      <h2 className="text text_uppercase card__title">{card.title}</h2>
      <p className="text text_uppercase card__article">Артикул: {card.article}</p>
      <p className={`text text_uppercase card__price highlighted-text highlighted-text_level_${card.type}`}>Цена: {card.price} руб.</p>
      {props.children}
    </div>
  );
});
