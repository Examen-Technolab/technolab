import { observer } from "mobx-react-lite";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { appStore } from "../../stores/AppStore";
import { InputStore } from "../../stores/InputStore";
import { useEffect } from "react";



const stores = {
  login: new InputStore(),
  password: new InputStore()
}

export const Admin = observer(() => {

  function onBtnClick() {
    if (appStore.isLoggedIn) {
      appStore.logout();
    } else {
      appStore.login(stores.login.value, stores.password.value);
    }
  }

  return (
    <main className="section">
      <h1 className="hidden">Авторизация</h1>
      <Form btn={appStore.isLoggedIn ? 'Выйти' : 'Войти'}
        onFormSubmit={onBtnClick}
        formElements={
          appStore.isLoggedIn ?
            <>
              <h2 className="text text_uppercase">Вы авторизованы</h2>
              <p className="text">{`Логин: ${appStore.user}`}</p>
              <p className="text">{`Права: ${appStore.isAdmin ? 'админ' : 'нет'}`}</p>
            </> :
            <>
              <FormInput {...stores.login} text="Имя пользователя" />
              <FormInput {...stores.password} type="password" text="Пароль" />
            </>
        }
      />
    </main>
  );
})