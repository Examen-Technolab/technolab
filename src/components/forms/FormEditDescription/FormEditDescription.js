//import style from './FormEditDescription.module.css';

import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import Form from "../Form/Form";

import FormTextarea from "../FormTextarea/FormTextarea";

import { InputStore } from "../../../stores/InputStore";
import { FormRadio } from "../FormRadio/FormRadio";

import { ListGroup } from "../ListGroup/ListGroup";


const stores = {
  id: new InputStore(),
  title: new InputStore(),
  newLi: new InputStore(),
  note: new InputStore(),
  tab: new InputStore('kit'),
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


const AreaComp = ({ name, setValue, value, disabled = false }) => {
  return (
    <textarea name={name} onChange={(e) => setValue(e.target.value)} value={value} disabled={disabled}></textarea>
  )
}

export const FormEditDescription = observer(({ submitHandler, item }) => {

  const [newList, setNewList] = useState([]);

  function handleSubmit() {
    submitHandler({
      id: stores.id.value,
      title: stores.title.value || '',
      list: newList.join("','") || '',
      note: stores.note.value || '',
      tab: stores.tab.value
    })
  }

  useEffect(() => {
    if (item) {
      stores.id.setValue(item.id);
      stores.title.setValue(item.title);
      stores.note.setValue(item.note);
      stores.tab.setValue(item.tab);
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
          <FormRadio
            values={['kit', 'specifications']}
            label="Вкладка"
            changeValue={stores.tab.setValue}
            value={stores.tab.value}
            name='tab'
          />

          <ListGroup
            title="Список"
            list={newList}
            setList={setNewList}
            defaultValue=""
            ComponentName={AreaComp}
          />

          <FormTextarea {...stores.note} name="note" text="Заметка" />
        </>
      }
    />
  );
})