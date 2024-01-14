import { Link, useParams } from 'react-router-dom';

import { logosObject } from '../../utils/constants';

function Logo() {
  let { level } = useParams();
  if (level) {
    level = level.includes('-') ? level.substring(0, level.indexOf('-')) : level;
  }
  let headerLogo = logosObject[level] || logosObject["undefined"];
  return (
    <Link to="/main" className="link">
      <img src={headerLogo} alt="Логотип Экзамен-Технолаб." className="logo" />
    </Link>
  );
}

export default Logo;