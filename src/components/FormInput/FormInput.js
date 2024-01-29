//import { InputValidator } from '../../utils/InputValidator';
//import { REGEX_NAME, REGEX_EMAIL } from '../../utils/constants';

/*
Пропсы:
value и setValue - для работы с состоянием значения инпута
handleChange - для кастомной обработки изменений инпута. Стандартно обрабатывается изменение текстового поля
required - обязательно ли поле
name - id и name инпута
text - текст плейсхолдера и подписи поля
если тип инпута не указан, то используется text
инпут имеет свойства multiple и accept="image/*,image/jpeg"
*/

function FormInput(props) {
  //const inputValidation = new InputValidator(setInputClass, setErrMessageClass, setErrMessage, props.setInputValid);
  //const regex = undefined //(!props.type) ? REGEX_NAME : (props.type === 'email') ? REGEX_EMAIL : undefined;

  function handleChange(e) {
    //задаем значение инпута при изменении его состояния

    // inputValidation.isValid(e);
    props.setValue(e.target.value);
    // if (props.setFormErrClass) props.setFormErrClass('visually-hidden');
  }

  // useEffect(() => {
  //   inputValidation.hideInputError();
  // }, [props.isOpen])

  return (
    <div className="form-input">
      <label htmlFor={props.name} className="form-input__title">{props.text}</label>
      {/* <input disabled={props.disabled} value={props.value} pattern={regex} onChange={handleChange} required={props.required} className={props.class} id={`${props.type ? props.type : "name"}-input`} type={`${props.type ? props.type : "text"}`} name={`${props.type ? props.type : "userName"}`}
        placeholder={props.text} />  как было*/}

      <input disabled={props.disabled} value={props.value} onChange={props.handleChange ? props.handleChange : handleChange} required={props.required}
        className='form-input__input' id={props.name} type={`${props.type ? props.type : "text"}`} name={props.name}
        placeholder={props.text} multiple accept="image/*,image/jpeg" />

      <span className={props.errMessageClass}>{props.errMessage}</span>
    </div>
  )
}

export default FormInput;