import Form from "../Form/Form";
import { FormSelect } from "../FormSelect/FormSelect";
import FormInput from "../FormInput/FormInput";
import { InputStore } from "../../stores/InputStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { cardsStore } from "../../stores/CardsStore";
import { popupStore } from "../../stores/PopupStore";
import { SelectStore } from "../../stores/SelectStore";
import FormImageLoader from "../FormImageLoader/FormImageLoader";


const stores = {
  type: new SelectStore(),
  title: new InputStore(),
  article: new InputStore(),
  price: new InputStore(),
  product: new InputStore(),
  preview: new InputStore(),
  countImg: new InputStore(),
  haveValues: function () {
    let result = true;
    for (let key in this) {
      if (key !== 'haveValues') {
        result = result && (this[key].value !== '');
      }
    }
    return result;
  },

}

export const FormAddCard = observer((props) => {

  useEffect(() => {
    //записываем данные карточки в сторы
    for (let key in stores) {
      if (key !== 'haveValues' && key !== 'lastPreview')
        stores[key].setValue(props.card ? props.card[key] : '');
    }
    stores.countImg.setValue(props.card ? (props.card.lastPreview + 1) : '');
    cardsStore.loadTypes();
  }, [])

  function handleSubmit() {

    const cardData = {};
    for (let key in stores) {
      if (key !== 'haveValues' && key !== 'countImg')
        cardData[key] = stores[key].value;
    }
    cardData.lastPreview = stores.countImg.value - 1;

    if (props.isEdit) {
      cardsStore.editCard(props.card, cardData);
    } else {
      cardsStore.addCard(cardData);
    }
    popupStore.close();
  }

  return (
    <Form btn={props.isEdit ? 'Сохранить' : 'Добавить'}
      btnDisabled={stores.haveValues() ? false : true}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text text_uppercase">{props.isEdit ? 'Редактировать' : 'Добавить карточку'}</h2>
          <FormSelect options={cardsStore.types} {...stores.type} />
          <FormInput req={true} {...stores.title} name="title" text="Название" />
          <FormInput {...stores.article} name="article" text="Артикул" />
          <FormInput {...stores.price} name="price" text="Цена" />
          {props.isEdit ?
            <>
              <FormInput {...stores.countImg} name="countImg" text="Количество картинок" />
            </> :
            <FormImageLoader setPreview={stores.preview.setValue} setCountImg={stores.countImg.setValue} title="Загрузить изображения" {...stores.product} havePreviews={true} mainDir="cards" />
          }
        </>
      }
    />

  );
})
