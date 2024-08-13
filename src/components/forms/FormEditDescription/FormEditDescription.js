//import style from './FormEditDescription.module.css';

import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

import PlusButton from "../../generic/PlusButton/PlusButton";
import FormTextarea from "../FormTextarea/FormTextarea";
import { LiInput } from '../LiInput/LiInput';

import { InputStore } from "../../../stores/InputStore";


const stores = {
  id: new InputStore(),
  title: new InputStore(),
  newLi: new InputStore(),
  note: new InputStore(),
  haveValue: function () {
    let result = false;
    for (let key in this) {
      if (key !== 'haveValue') {
        result = result || (this[key].value !== '');
      }
    }
    return result;
  },

}

export const FormEditDescription = observer(({ submitHandler, item }) => {

  const [newList, setNewList] = useState([]);

  function handleSubmit() {
    submitHandler({
      id: stores.id.value,
      title: stores.title.value,
      list: newList.join("','"),
      note: stores.note.value
    })
  }

  function handleKeyDown(e) {
    if (e.key === "Control" && stores.newLi.value !== '') {
      setNewList([...newList, stores.newLi.value]);
      stores.newLi.setValue('');
    }
  }

  useEffect(() => {
    console.log(item);
    if (item) {
      stores.id.setValue(item.id);
      stores.title.setValue(item.title);
      stores.note.setValue(item.note);
      setNewList(item.list)
    }
  }, [])

  return (
    <Form btn="Сохранить"
      btnDisabled={stores.haveValue() ? false : true}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text_uppercase">{item ? 'Редактировать' : 'Добавить'} блок описания</h2>
          <FormTextarea  {...stores.title} name="title" text="Заголовок" />
          <div>
            <h3 className="text_uppercase">Список</h3>
            <ul>
              {
                newList.map((li, index) => {
                  return (
                    <LiInput
                      deleteLi={() => {
                        let array = [...newList];
                        array.splice(index, 1);
                        setNewList(array);
                      }}
                      index={index}
                      key={index}
                      setValue={(val) => {
                        let array = newList;
                        array[index] = val;
                        setNewList(array);
                      }}
                      value={li}
                    />
                  )
                })
              }
            </ul>
            <FormInput handleKeyDown={handleKeyDown} {...stores.newLi} name="newLi" text="Новый элемент списка. Будет добавлен после нажатия на Ctrl" />
          </div>
          <FormTextarea {...stores.note} name="note" text="Заметка" />
        </>
      }
    />
  );
})