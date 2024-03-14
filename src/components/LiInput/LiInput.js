import style from './LiInput.module.css';

import { useEffect, useRef, useState } from 'react';


export const LiInput = (props) => {

  function cancelEdit() {
    setNewValue(value);
    closeEdit();
  }

  function closeEdit() {
    setInputClass(style.input);
    setDisabled(true);
  }

  function openEdit() {
    setInputClass(style.input_active);
    setDisabled(false);
    setValue(newValue);
  }

  const myRef = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [inputClass, setInputClass] = useState(style.input);
  const [value, setValue] = useState(props.value);
  const [newValue, setNewValue] = useState(props.value);

  function handleDoubleClick() {
    openEdit()
  }

  function handleChange(e) {
    setNewValue(e.target.value);
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case "Enter":
        //props.setValue(newValue);
        closeEdit();
        break;
      case "Escape":
        cancelEdit();
        break;
      default:
        break;
    }
  }

  useEffect(() => {

    // Function for click event
    function handleOutsideClick(event) {
      if (myRef.current && !myRef.current.contains(event.target)) {
        cancelEdit();
      }
    }
    if (!disabled) {
      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [myRef, disabled]);

  return (
    <li ref={myRef} onDoubleClick={handleDoubleClick} id={props.index}>
      <input onKeyDown={handleKeyDown} onChange={handleChange} disabled={disabled} className={inputClass} value={newValue}></input>
    </li>
  )
}