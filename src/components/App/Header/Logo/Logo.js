import style from './Logo.module.css';
import { Link } from 'react-router-dom';

import { logosObject } from '../../../../utils/constants';
import { appStore } from '../../../../stores/AppStore';


import nsppoLogo from '../../../../images/nsppo-new.png';

function Logo() {
  let headerLogo = logosObject[appStore.level];
  return (
    <div className={style.logoContainer}>
      <Link to="/main" className="link">
        <img src={headerLogo} alt="Логотип Экзамен-Технолаб." className={style.logo} />
      </Link>
      <img src={nsppoLogo} alt="Знак отличия НСППО" className={style.logo_nspo} />
    </div>
  );
}

export default Logo;