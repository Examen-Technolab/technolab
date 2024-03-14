import { useState } from "react";

import TileWithScroll from "../tiles/TileWithScroll/TileWithScroll";

function Select(props) {

  const [selectedData, setSelectedData] = useState(props.options[0].title);
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(evt) {
    const option = JSON.parse(evt.target.value);
    setSelectedData(option.title);
    props.setFilter(option.value);
    setIsOpen(false);
  }

  function handleSelectClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-wrapper">
      <button type="button" onClick={handleSelectClick} className="select text text_uppercase" name="manuals" id="type-select">{selectedData}</button>
      <TileWithScroll tileClass={isOpen ? 'select__list-container' : 'hidden'} >
        {
          props.options.map((option) => {
            return (
              <button type="button" key={'select' + option.value} onClick={handleOptionClick} value={JSON.stringify(option)} className={`text select__list-item ${selectedData === option.title ? 'select__list-item_active' : ' '}`}>
                {option.title}
              </button>
            )
          })
        }

      </TileWithScroll>
    </div >
  );
}
export default Select;