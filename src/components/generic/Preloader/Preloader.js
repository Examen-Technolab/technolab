import style from './Preloader.module.css';
import { observer } from "mobx-react-lite"
import { appStore } from "../../../stores/AppStore";

export const Preloader = observer(() => {
  return appStore.loading ? (
    <div className={style.preloader}>
      <div className={style.container}>
        <span className={style.round}></span>
      </div>
    </div>
  ) : (<></>)
});

