import { useState } from "react";

import TileWithScroll from "../TileWithScroll/TileWithScroll";

function Select({ options, onClick = () => { }, defaultOption }) {

  const [selectedData, setSelectedData] = useState(defaultOption ?? options[0].title);
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(evt) {
    const option = JSON.parse(evt.target.value);
    setSelectedData(option.title);
    onClick(option.value);
    setIsOpen(false);
  }

  function handleSelectClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-wrapper">
      <button type="button" onClick={handleSelectClick} className="select text_uppercase" name="manuals" id="type-select">{selectedData}</button>
      <TileWithScroll tileClass={isOpen ? 'select__list-container' : 'hidden'} >
        {
          options.map((option, ind) => {
            return (
              <button type="button" key={'select' + option.value + ind} onClick={handleOptionClick} value={JSON.stringify(option)} className={`select__list-item ${selectedData === option.title ? 'select__list-item_active' : ' '}`}>
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