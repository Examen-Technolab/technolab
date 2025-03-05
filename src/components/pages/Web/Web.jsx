import { popupStore } from '../../../stores/PopupStore';
import Tile from '../../generic/Tile/Tile';
import style from './Web.module.css';
import { useEffect } from 'react';
import { appStore } from '../../../stores/AppStore';
import PlusButton from '../../generic/PlusButton/PlusButton';
import { FormAddWeb } from '../../forms/FormAddWeb/FormAddWeb';
import { observer } from 'mobx-react-lite';
import { webStore } from '../../../stores/WebStore';
import { WebCard } from './WebCard/WebCard';

export const Web = observer(({ }) => {

  const onPlusBtnClick = () => {
    popupStore.open(<FormAddWeb />);
  }

  useEffect(() => {
    webStore.getInitialWebs();
  }, []);

  return (
    <main className={'section ' + style.web}>

      <Tile tileClass={style.tile}>
        <h1 className={style.title}>Вебинары</h1>
      </Tile>

      {
        appStore.isLoggedIn &&
        <PlusButton title="Добавить вебинар."
          onClick={onPlusBtnClick} />
      }

      <ul className={style.list}>
        {
          webStore.list.map((item, index) => {

            return (
              <WebCard item={item} key={'web' + index} />
            )
          })
        }
      </ul>
    </main>
  )
})