import { observer } from 'mobx-react-lite';

import { Slider } from '../../generic/Slider/Slider';
import Form from '../../forms/Form/Form';

import { appStore } from '../../../stores/AppStore';
import { popupStore } from '../../../stores/PopupStore';
import { cardsStore } from '../../../stores/CardsStore';
import { AdminBtns } from '../../generic/AdminBtns/AdminBtns';
import { FormEditCard } from '../../forms/FormEditCard/FormEditCard';
import { useEffect, useState } from 'react';

function formPreviews(fileName, lastIndex, directory) {
  const previews = ['/images/cards/' + directory + '/' + fileName];
  for (let i = 1; i <= lastIndex; i++) {
    const pointIndex = previews[0].lastIndexOf('.');
    previews.push(previews[0].slice(0, pointIndex) + `-${i}` + previews[0].slice(pointIndex, previews[0].length));
  }

  return previews;
}

export const Card = observer(({ card, type, children }) => {

  function onEditClick() {
    popupStore.open(<FormEditCard card={card} previewList={previewList} />);
  }

  function onDeleteClick() {
    function handleSubmit() {
      cardsStore.deleteCard(card.id);
      popupStore.close();
      if (window.location.pathname !== '/catalog')
        window.location.replace('/catalog')
    }
    popupStore.open(<>
      <p>Вы уверены? Это действие нельзя отменить</p>
      <Form btn="Удалить"
        onFormSubmit={handleSubmit} />
    </>);
  }

  const [previewList, setPreviewList] = useState([]);

  useEffect(() => {
    // формируем массив превьюшек
    const previews = formPreviews(card.preview, card.lastPreview, card.product);
    setPreviewList(previews)

  }, [card])



  //console.log(props.img[0].replace("-preview", ""));

  // const preview = [];
  // props.img.map((item, index) => {
  //   preview[index] = item.replace("-preview", "")
  // })


  return (
    <div className={`card card_type_${type} card_level_${card.type} ${card.isHidden ? 'card_hidden' : ''}`}>
      {
        appStore.isLoggedIn ?
          <AdminBtns
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
          : <></>
      }
      <Slider sliderClass="card__slider" title={card.title} img={previewList} />
      <h2 className="text_uppercase card__title">{card.title}</h2>
      <p hidden={!card.article ? true : false} className="text_uppercase card__article">Артикул: {card.article}</p>
      <p hidden={!card.price ? true : false} className={`text_uppercase card__price highlighted-text highlighted-text_level_${card.type}`}>Цена: {card.price} руб.</p>
      {children}
    </div>
  );
});
