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
import { compareArr } from '../../../utils/functions';


const stores = {
  type: new SelectStore(),
  isHidden: new SelectStore(),
  title: new InputStore(),
  article: new InputStore(),
  price: new InputStore(),
  product: new InputStore(),
  ordinal: new InputStore(100),
  images: new InputStore(),
  //countImg: new InputStore(),
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

export const FormEditCard = observer(({
  card,
  previewList
}) => {

  const [err, setErr] = useState('');

  const [initImgs, setInitImgs] = useState([]); //список картинок до редактирование
  const [loadImg, setLoadImg] = useState(0);


  const handleSubmit = () => {


    //если пользователь не менял картинки
    if (compareArr(stores.images.value, initImgs)) {

      setLoadImg(stores.images.value.length);

    } else {



      const product = stores.product.value;

      setLoadImg(0);
      const mainDir = 'cards';
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }

      api.deleteImages(product, mainDir)
        .then(data => {
          if (!data.ok) {
            setErr('обновите страницу и попробуйте еще раз');
          } else {
            stores.images.value.forEach((image, index) => {
              //для каждой картинки создаем превью, определяем имя её и превьюшки, затем отправляем попарно картинку и превьюшку
              appStore.setLoading(true);

              //формируем имена
              let nameImage = product + (index ? `-${index}` : '');
              let namePreview = product + '-preview' + (index ? `-${index}` : '');
              //сжимаем картинки
              imageCompression(image, options)
                .then(myBlob => {
                  const previewFile = new File([myBlob], namePreview, {
                    type: myBlob.type,
                  });

                  //отправляем картинки
                  Promise.all([api.postImage(image, nameImage, product, mainDir), api.postImage(previewFile, namePreview, product, mainDir)])
                    .then(() => {
                      setLoadImg(state => state + 1);
                    })
                    .catch(() => {
                      setErr('Произошла ошибка, обнвите страницу и попробуйте еще раз')
                    })
                    .finally(() => {
                      appStore.setLoading(false);
                    })
                })
                .catch((e) => {

                  console.log('error blob', e)
                })
            })
          }
        });



    }

  }


  useEffect(() => {
    appStore.setLoading(true);
    const files = [];
    Promise.all(previewList.map(previewUrl => {
      const imgUrl = previewUrl.replace('-preview', '');
      return fetch(imgUrl, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
        credentials: 'include'
      })
        .then(res => res.blob())
        .then((fileBlob) => {
          const nameImg = imgUrl.split('/').reverse()[0];
          const imgFile = new File([fileBlob], nameImg, {
            type: "image/png",
          });
          files.push(imgFile);
        })
    }))
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        appStore.setLoading(false);
        stores.images.setValue(files);
        setInitImgs(files);
      })

    cardsStore.loadTypes();

    if (card) {

      //записываем данные карточки в сторы
      for (let key in stores) {
        if (key !== 'haveValues' && key !== 'images')
          stores[key].setValue(card[key] || '');
      }

      stores.isHidden.setValue(card.isHidden ? 'Да' : 'Нет');
      //stores.countImg.setValue(props.card ? (props.card.lastPreview + 1) : '');
    }


  }, [])

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

      cardsStore.editCard(card, cardData, popupStore.close);

    }
  }, [loadImg])



  return (
    <Form
      btn="Сохранить"
      errMessage={err}
      btnDisabled={err}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text_uppercase">Редактировать</h2>
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
          <FormInput disabled={true} {...stores.product} name="product" text="Код продукта/имя папки с картинками" />
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
