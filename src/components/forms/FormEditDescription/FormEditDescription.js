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
  title: new InputStore(),
  newLi: new InputStore(),
  note: new InputStore(),
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

export const FormEditDescription = observer((props) => {

  const [newList, setNewList] = useState([]);

  function handleSubmit() {

    console.log('submit')
  }

  function handleKeyDown(e) {

    // if (e.key === 'Enter') {
    //   if(e.target.name === 'newLi' && stores.newLi.value !== ''){

    //   }
    //   console.log(e.target.name);
    // }
    if (e.key === "Enter" && stores.newLi.value !== '') {
      console.log(e.target);
      setNewList([...newList, stores.newLi.value]);
      stores.newLi.setValue('');
    }
  }

  function handleDoubleClickOnLi(e) {
    console.log(e.target.id)

  }

  useEffect(() => {

    console.log('change');
    console.log(newList);

  }, [newList])

  return (
    <Form btn="Сохранить"
      btnDisabled={stores.haveValues() ? false : true}
      onFormSubmit={handleSubmit}
      formElements={
        <>
          <h2 className="text text_uppercase">Добавить блок описания</h2>
          <FormTextarea  {...stores.title} name="title" text="Заголовок" />
          <div>
            <h3 className="text text_uppercase">Список</h3>
            <ul>
              {
                newList.map((li, index) => {
                  return (
                    <LiInput index={index} key={index} setValue={(val) => {
                      let array = newList;
                      array[index] = val;
                      setNewList(array);
                    }} value={li} />
                  )
                })
              }
            </ul>
            <FormInput handleKeyDown={handleKeyDown} {...stores.newLi} name="newLi" text="Новый элемент списка. Будет добавлен после нажатия на Enter" />
          </div>
          <FormTextarea {...stores.note} name="note" text="Заметка" />
        </>
      }
    />
  );
})