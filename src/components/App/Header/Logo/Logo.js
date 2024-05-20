import style from './Logo.module.css';
import { Link } from 'react-router-dom';

import { logosObject } from '../../../../utils/constants';
import { appStore } from '../../../../stores/AppStore';

function Logo() {
  let headerLogo = logosObject[appStore.level];
  return (
    <Link to="/main" className="link">
      <img src={headerLogo} alt="Логотип Экзамен-Технолаб." className={style.logo} />
    </Link>
  );
}

export default Logo;