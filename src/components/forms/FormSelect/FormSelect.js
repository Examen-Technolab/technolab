import { useEffect, useState } from "react";

import TileWithScroll from "../../tiles/TileWithScroll/TileWithScroll";

export const FormSelect = (props) => {

  //Если передано значение, установленное на карточке, то меняем стейт, который хранит выбранную из списка опцию.
  //Делаем это при изменении списка опций или значения, установленного на карточке.
  useEffect(() => {
    if (props.value) {
      let option = props.options.find(option => option.value == props.value);
      if (option) {
        setFormSelectedData(option.title);
      }
    }
  }, [props.value, props.options])

  const [formSelectedData, setFormSelectedData] = useState(props.options[0].title); //хранит название выбранной опции
  const [isOpen, setIsOpen] = useState(false); //открыт ли список

  //при клике на опцию списка задаем соответствующее название и значение, закрываем список
  //название хранится в стейте formSelectedData
  //значение задаем с помощью пропса setValue
  function handleOptionClick(evt) {
    const option = JSON.parse(evt.target.value);
    props.setValue(option.value);
    setFormSelectedData(option.title);
    setIsOpen(false);
  }

  //при нажатии на селект открываем/закрываем выпадающее меню
  function handleFormSelectClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="form-select-wrapper">
      <label htmlFor="form-select" className="form-select__title">Тип</label>
      <button type="button" onClick={handleFormSelectClick} className="form-select" name="form-select" id="form-select">{formSelectedData}</button>
      <TileWithScroll tileClass={isOpen ? 'form-select__list-container' : 'hidden'} >
        {
          props.options.map((option) => {
            return (
              <button type="button" key={'form-select' + option.value} onClick={handleOptionClick} value={JSON.stringify(option)} className={`form-select__list-item ${formSelectedData === option.title ? 'form-select__list-item_active' : ' '}`}>
                {option.title}
              </button>
            )
          })
        }
      </TileWithScroll>
    </div >
  );
}