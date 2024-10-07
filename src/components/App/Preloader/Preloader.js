import style from './Preloader.module.css';

import { observer } from "mobx-react-lite"

import { appStore } from "../../../stores/AppStore";

export const Preloader = observer(() => {
  return (
    <div className={style.preloader + ' ' + (appStore.loading ? style.preloader_visible : '')}>
      <div className={style.container}>
        <span className={style.round}></span>
      </div>
    </div>
  )
});

