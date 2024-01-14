/*
Пропсы:
havePreviews - нужно ли загружать превью картинок
setValue и value - для управления состоянием инпута имени папки с картинками
mainDir - имя папки в каталоге images на сервере
*/

import { useEffect, useState } from "react";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import api from "../../utils/Api";
import { appStore } from "../../stores/AppStore";

function FormImageLoader(props) {

  const [images, setImages] = useState([]); //стейт списка файлов - картинок
  const [previews, setPreviews] = useState([]); //стейт списка файлов - превьюшек
  const [message, setMessage] = useState(''); //сообщение о состоянии отправки
  const [messageClass, setMessageClass] = useState('hidden'); //стейт класса элемента, отображающего состояние отправки
  const [againBtnClass, setAgainBtnClass] = useState('hidden'); //стейт класса кнопки "попробовать еще раз"
  const [btnDisabled, setBtnDisabled] = useState(true); //true - кнопка отправки неактивна, false - активна

  useEffect(() => {
    //активируем кнопку при заполнении всех полей
    if ((props.value !== '') && (!props.havePreviews || (previews.length === images.length && images.length))) {
      setBtnDisabled(false);
    }
  }, [props.value, previews, images])

  function getNewImages(files) {
    //создает и возвращает массив файлов из объекта, полученного из инпута типа 'file'.
    //исходный объект имеет поля с ключами-индексами и соответствующими файлами,
    //а также поле length, в котором хранится количество загружаемых файлов

    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }
    return newImages;
  }

  function handleChangeImages(evt) {
    //обрабатывает добавление картинок через соответствующий инпут
    setImages(getNewImages(evt.target.files));
  }

  function handleChangePreviews(evt) {
    //обрабатывает добавление превьюшек через соответствующий инпут
    setPreviews(getNewImages(evt.target.files));
  }

  function postImages() {
    /* Если задано имя папки, в которой необходимо хранить картинки,
    и количество превьюшек(если они нужны) соответствует количеству картинок,
    то отправляет картинки на сервер
    */
    if ((props.value !== '') && (!props.havePreviews || previews.length === images.length)) {
      images.forEach((image, index) => {
        //для каждой картинки определяем имя её и превьюшки, затем отправляем попарно картинку и превьюшку
        appStore.setLoading(true);
        setMessageClass('');
        let nameImage = props.value + (index ? `-${index}` : '');
        let namePreview = props.value + '-preview' + (index ? `-${index}` : '');
        let promises = [api.postImage(image, nameImage, props.value, props.mainDir)];
        if (props.havePreviews) {
          promises.push(api.postImage(previews[index], namePreview, props.value, props.mainDir));
        }
        Promise.all(promises)
          .then(() => {
            setMessage('Изображения загружены');
          })
          .catch(() => {
            setMessage('Возникла ошибка!');
            setAgainBtnClass('image-loader__again-btn');
          })
          .finally(() => {
            appStore.setLoading(false);
            props.setPreview(props.value + '-preview.png');
            props.setCountImg(images.length);
          })
      })
    } else {
      setMessageClass('');
      setMessage('Нет имени папки или не совпадает количество картинок и их превью!');
      setAgainBtnClass('image-loader__again-btn');
    }
  }

  function hideStatus() {
    setMessageClass('hidden');
    setAgainBtnClass('hidden');
  }

  return (
    <div className="image-loader">
      <h3 className="text image-loader__title">{props.title}</h3>
      <h3 className={`text text_uppercase image-loader__result ${messageClass}`}>{message}</h3>
      <FormInput setValue={props.setValue} value={props.value} name="product" text="Продукт/имя папки с картинками" />
      {
        props.havePreviews ?
          <FormInput type="file" handleChange={handleChangePreviews} name="previews" text="Превью картинок" />
          : <></>
      }
      <FormInput type="file" handleChange={handleChangeImages} name="images" text="Картинки" />
      <FormButton btnDisabled={btnDisabled} handleClick={postImages} type="button" text="Отправить картинки" />
      <FormButton btnClass={againBtnClass} handleClick={hideStatus} type="button" text="Попробовать еще раз" />
    </div>
  )
}

export default FormImageLoader;