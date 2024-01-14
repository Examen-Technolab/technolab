import { observer } from "mobx-react-lite"
import { appStore } from "../../stores/AppStore";

export const Preloader = observer(() => {
  return appStore.loading ? (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  ) : (<></>)
});

