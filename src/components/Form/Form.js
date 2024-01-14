import { useEffect } from "react";
import { popupStore } from "../../stores/PopupStore";
import FormButton from "../FormButton/FormButton";

function Form(props) {

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onFormSubmit();
  }

  useEffect(() => {
    if (popupStore.keydown === 'Enter') {
      console.log('enter');
      props.onFormSubmit();
    }
  }, [popupStore.keydown])

  return (
    <form className={props.formClass ? props.formClass : 'form'} name={props.name}>
      <div className="form__container">
        {props.formElements}
      </div>
      <div className="form__container">
        <span className={props.errMessageClass}>{props.errMessage}</span>
        <FormButton btnDisabled={props.btnDisabled} handleClick={handleSubmit} text={props.btn} />
      </div>
    </form>
  );
}

export default Form;