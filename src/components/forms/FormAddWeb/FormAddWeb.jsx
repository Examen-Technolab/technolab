//вынести отправку
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { InputStore } from "../../../stores/InputStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { webStore } from "../../../stores/WebStore";
import { popupStore } from "../../../stores/PopupStore";


const stores = {
  title: new InputStore(),
  subtitle: new InputStore(),
  about: new InputStore(),
  date: new InputStore(),
  time: new InputStore(),
  link: new InputStore(),
  video: new InputStore(),
  haveValues: function () {
    let result = true;
    for (let key in this) {
      if (key !== 'haveValues' && key !== 'video' && key !== 'link') {
        result = result && this[key].value;
      }
    }
    return result;
  },

}

export const FormAddWeb = observer(({ data }) => {

  const [err, setErr] = useState('');

  const handleSubmit = () => {
    const newData = {};
    for (let key in stores) {
      if (key !== 'haveValues' && key !== 'date' && key !== 'time') {
        newData[key] = stores[key].value;
      }
    }
    const [year, month, day] = stores['date'].value.split('-');
    newData['date'] = `${day}.${month}.${year} - ${stores['time'].value}`;
    data ? webStore.editWeb(data.id, newData, popupStore.close) :
      webStore.addWeb(newData, popupStore.close);
  }

  useEffect(() => {
    if (data) {
      for (let key in stores) {
        if (key !== 'haveValues' && key !== 'date' && key !== 'time') {
          stores[key].setValue(data[key] || '');
        }
      }
      let [date, time] = data.date.split(' - ');
      const [day, month, year] = date.split('.');
      date = `${year}-${month}-${day}`;
      stores['date'].setValue(date);
      stores['time'].setValue(time);
    }
  }, [])

  return (
    <Form
      btn={data ? 'Сохранить' : 'Добавить'}
      errMessage={err}
      btnDisabled={!stores.haveValues() || err}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text_uppercase">{data ? 'Изменить' : 'Добавить'} вебинар</h2>

          <FormInput req={true} {...stores.title} name="title" text="Заголовок" />
          <FormInput {...stores.subtitle} name="subtitle" text="Подзаголовок" />
          <FormInput {...stores.about} name="about" text="Описание" />
          <FormInput {...stores.date} type="date" name="date" text="Дата в формате: дд.мм.гггг" />
          <FormInput {...stores.time} type="time" name="time" text="Время в формате: чч:мм" />
          <FormInput {...stores.link} name="link" text="Ссылка на регу или вебинар" />
          <FormInput {...stores.video} name="video" text="Запись вебинара (frame)" />
        </>
      }
    />

  );
})
