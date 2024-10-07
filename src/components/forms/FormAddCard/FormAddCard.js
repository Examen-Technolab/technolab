//вынести отправку

import imageCompression from 'browser-image-compression';

import Form from "../Form/Form";
import { FormSelect } from "../FormSelect/FormSelect";
import FormInput from "../FormInput/FormInput";
import { InputStore } from "../../../stores/InputStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { cardsStore } from "../../../stores/CardsStore";
import { popupStore } from "../../../stores/PopupStore";
import { SelectStore } from "../../../stores/SelectStore";
import { DnDFileInput } from "../../generic/DnDFileInput/DnDFileInput";
import { FormRadio } from "../FormRadio/FormRadio";
import { appStore } from "../../../stores/AppStore";
import api from '../../../utils/Api';


const stores = {
  type: new SelectStore(),
  isHidden: new SelectStore(),
  title: new InputStore(),
  article: new InputStore(),
  price: new InputStore(),
  product: new InputStore(),
  ordinal: new InputStore(100),
  images: new InputStore(),
  haveValues: function () {
    let result = true;
    for (let key in this) {
      if (key !== 'haveValues' && key !== 'type' && key !== 'ordinal') {
        result = result && (this[key].value && this[key].value.length);
      }
    }
    return result;
  },

}

export const FormAddCard = observer(() => {

  const [err, setErr] = useState('');
  const [loadImg, setLoadImg] = useState(0);


  useEffect(() => {
    //подгрузка типов карточек
    cardsStore.loadTypes();
  }, [])

  useEffect(() => {
    //очистка ошибки уникальности кода продукта, когда вводится значение
    setErr('');
  }, [stores.product.value])

  useEffect(() => {
    //когда все картинки отправлены, отправляем данные карты

    if (loadImg && loadImg === stores.images.value.length) {

      const cardData = {};
      for (let key in stores) {
        if (key !== 'haveValues' && key !== 'images') {
          let newValue = stores[key].value;
          if (key === "isHidden")
            newValue = (stores[key].value === "Да") ? 1 : 0;
          cardData[key] = newValue;
        }
      }

      cardData.lastPreview = stores.images.value.length - 1;

      cardData.preview = stores.product.value + '-preview.png';

      cardsStore.addCard(cardData, popupStore.close)
    }
  }, [loadImg])


  const handleSubmit = () => {
    const product = stores.product.value;

    //проверяем уникално ли имя продукта(код)
    api.getCheckProduct(product)
      .then(resp => {
        if (resp) {
          setErr('Продукт с таким именем уже существует!')
        } else {
          setLoadImg(0);
          const mainDir = 'cards';
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          }

          stores.images.value.forEach((image, index) => {
            //для каждой картинки создаем превью, определяем имя её и превьюшки, затем отправляем попарно картинку и превьюшку
            appStore.setLoading(true);

            //формируем имена
            let nameImage = product + (index ? `-${index}` : '');
            let namePreview = product + '-preview' + (index ? `-${index}` : '');

            //сжимаем картинки
            imageCompression(image, options)
              .then(fileBlob => {
                const previewFile = new File([fileBlob], namePreview, {
                  type: fileBlob.type,
                });

                //отправляем картинки
                Promise.all([api.postImage(image, nameImage, product, mainDir), api.postImage(previewFile, namePreview, product, mainDir)])
                  .then(() => {
                    setLoadImg(state => state + 1);
                  })
                  .catch(() => {
                    setErr('Произошла ошибка, обновите страницу и попробуйте еще раз')
                  })
                  .finally(() => {
                    appStore.setLoading(false);
                  })
              })
          })
        }
      })
  }

  return (
    <Form
      btn={'Добавить'}
      errMessage={err}
      btnDisabled={!stores.haveValues() || err}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text_uppercase">Добавить карточку</h2>
          <FormSelect options={cardsStore.types} {...stores.type} />

          <FormRadio
            values={['Нет', 'Да']}
            label='Скрытая карточка'
            changeValue={stores.isHidden.setValue}
            value={stores.isHidden.value}
            name="isHidden"
            required
          />
          <FormInput req={true} {...stores.title} name="title" text="Название" />
          <FormInput {...stores.article} name="article" text="Артикул" />
          <FormInput {...stores.price} name="price" text="Цена" />
          <FormInput {...stores.product} name="product" text="Код продукта/имя папки с картинками" />
          <FormInput {...stores.ordinal} name="ordinal" text="Сортировка" />

          <DnDFileInput
            title="Картинки"
            files={stores.images.value}
            setFiles={stores.images.setValue}
            maxCount={10}
            name="images"
            accept=".png"
            maxMb={5}
          />

        </>
      }
    />

  );
})
