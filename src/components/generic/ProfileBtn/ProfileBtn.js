import style from './ProfileBtn.module.css';

import { observer } from 'mobx-react-lite';

import { NavLink } from 'react-router-dom';

import { appStore } from '../../../stores/AppStore';

export const ProfileBtn = observer(() => {

  if (appStore.isLoggedIn)
    return (
      <NavLink to="/admin" activeClassName={style.btn_active} className={style.btn} />
    );
})