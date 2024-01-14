function UpButton(props) {
  return (
    <button type="button" onClick={props.onButtonClick} alt="Наверх" className={`text text_uppercase up-button ${props.upBtnClass}`}>В начало</button>
  );
}
export default UpButton;