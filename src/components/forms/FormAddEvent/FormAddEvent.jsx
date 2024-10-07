import { observer } from "mobx-react-lite";
import Form from "../Form/Form"
import FormInput from "../FormInput/FormInput"
import { useEffect, useState } from "react";
import { InputStore } from "../../../stores/InputStore";
import { DnDFileInput } from "../../generic/DnDFileInput/DnDFileInput";
import { eventsStore } from "../../../stores/EventsStore";
import { popupStore } from "../../../stores/PopupStore";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox";

import style from './FormAddEvent.module.css'
import { ListGroup } from "../ListGroup/ListGroup";
import { InputGroup } from "./InputGroup/InputGroup";
import api from "../../../utils/Api";
import { appStore } from "../../../stores/AppStore";

const mainDir = 'events';

const notReqNamesWithPage = ['haveValues', 'code', 'btnText', 'btnLink', 'isLinkResult', 'withPage'];
const notReqNames = [...notReqNamesWithPage, 'links', 'description'];

const stores = {
  images: new InputStore([]),
  title: new InputStore(''),
  date: new InputStore(''),
  lastDay: new InputStore(''),
  about: new InputStore(''),

  withPage: new InputStore(false),
  code: new InputStore(''),
  btnText: new InputStore(''),
  btnLink: new InputStore(''),
  isLinkResult: new InputStore(false),

  links: new InputStore([]),
  description: new InputStore([]),
  haveValues: function (notReqNames) {
    let result = true;
    for (let key in this) {
      if (!notReqNames.includes(key) && key !== 'images') {
        result = result && (this[key].value && this[key].value.length);
      }
    }
    return result;
  },

}

export const FormAddEvent = observer(({ eventData }) => {

  const [err, setErr] = useState('');

  const handleSubmit = () => {

    //формируем данные
    const newEventData = {};
    for (let key in stores) {
      if (key !== 'haveValues' && key !== 'images' && key !== 'links' && key !== 'description') {
        let newValue = stores[key].value;
        newEventData[key] = newValue;
      } else if (key === 'images') {
        newEventData.logo = stores[key].value.length ? URL.createObjectURL(stores[key].value[0]) : eventData.logo;
      } else if (key !== 'links' || key !== 'description') {
        newEventData[key] = JSON.stringify(stores[key].value);
      }
    }

    const send = (newData, eventData = false) => {
      const apiRes = () => eventData ?
        (api.patchEvent(newData, eventData.id)
          .then(data => {
            eventsStore.editEvent(newData, eventData.id);
          }))
        : (
          api.postEvent(newData)
            .then(data => {
              eventsStore.addEvent(data)
            }));

      apiRes()
        .catch((err) => {
          console.log(err);
          setErr('Произошла ошибка, попробуйте еще раз')
        })
        .finally(() => {
          appStore.setLoading(false)
          popupStore.close()
        });
    }

    appStore.setLoading(true);

    if (stores.images.value.length) {
      const code = newEventData.code;
      api.postImage(stores.images.value[0], code, code, mainDir)
        .then(data => {
          newEventData.logo = '/images/' + mainDir + '/' + code + '/' + code;
          send(newEventData, eventData);
        })
        .catch(err => setErr('Ошибка, перезагрузите страницу'))
        .finally(() => appStore.setLoading(false))
    } else send(newEventData, eventData);

  }

  useEffect(() => {
    if (eventData) {
      for (let key in stores) {
        if (key !== 'haveValues' && key !== 'images' && key !== 'links' && key !== 'description') {
          stores[key].setValue(eventData[key]);
        } else if (key === 'links' || key === 'description') {
          stores[key].setValue(JSON.parse(eventData[key]));
        }
      }
    }
  }, [])

  return (
    <Form
      btn={eventData ? 'Сохранить' : 'Добавить'}
      errMessage={err}
      btnDisabled={!stores.haveValues(stores.withPage.value ? notReqNamesWithPage : notReqNames) || err}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text_uppercase">{eventData ? 'Изменить ' : 'Добавить '}мероприятие</h2>

          <div>
            <FormInput disabled={!!eventData} {...stores.code} name="code" text="Символьный код" />

            <DnDFileInput
              title={eventData ? 'Загрузить новую обложку' : 'Обложка'}
              files={stores.images.value}
              setFiles={stores.images.setValue}
              maxCount={1}
              name="images"
              accept=".png"
              maxMb={5}
            />
            <FormInput {...stores.title} name="title" text="Заголовок" />
            <FormInput {...stores.date} name="date" text="Даты" />
            <FormInput {...stores.lastDay} name="lastDay" text="Последний день дд.мм.гггг" />
            <FormInput {...stores.about} name="about" text="Описание" />


            <FormInput {...stores.btnText} name="btnText" text="Текст кнопки" />
            <FormInput {...stores.btnLink} name="btnLink" text="Ссылка кнопки" />

            <FormCheckbox
              title="Показывать кнопку, когда мероприятие в архиве"
              value={stores.isLinkResult.value}
              setValue={stores.isLinkResult.setValue}
              name="isLinkResult"
            />

            <FormCheckbox
              title="Добавить страницу с описанием мероприятия"
              value={stores.withPage.value}
              setValue={stores.withPage.setValue}
              name="withPage"
            />
            {
              !!stores.withPage.value &&
              <div className={style.pageOptions}>
                <p>Параметры страницы</p>

                <ListGroup
                  title="Ссылки"
                  list={stores.links.value}
                  setList={stores.links.setValue}
                  defaultValue={{ body: '', title: '' }}
                  ComponentName={InputGroup}
                />

                <ListGroup
                  title="Описание"
                  list={stores.description.value}
                  setList={stores.description.setValue}
                  defaultValue={{ body: '', title: '' }}
                  ComponentName={InputGroup}
                />

              </div>
            }

          </div>

          <div>
          </div>

        </>
      }
    />
  )
})