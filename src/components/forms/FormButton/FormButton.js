/*
Пропсы:
handleClick - для обработки нажатия на кнопку
btnDisabled - true - неактивна, false - активна
btnClass - дополнительный класс кнопки
type - тип, по умолчанию submit
text - текст на кнопке и метка
*/

function FormButton(props) {
  return (
    <button onClick={props.handleClick} disabled={props.btnDisabled} className={`btn form-btn ${props.btnClass ? props.btnClass : ''} ${props.btnDisabled ? 'form-btn_inactive' : ''}`} type={props.type ? props.type : 'submit'} aria-label={props.text}>{props.text}</button>
  )
}

export default FormButton;