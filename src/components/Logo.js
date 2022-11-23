import { Link, useParams } from 'react-router-dom';
import preliminary from '../images/logo/logo-preliminary.svg';
import elementary from '../images/logo/logo-elementary.svg';
import basic from '../images/logo/logo-basic.svg';
import professional from '../images/logo/logo-professional.svg';
import research from '../images/logo/logo-research.svg';
import aero from '../images/logo/logo-aero.svg';
import defaultLogo from '../images/logo/logo.svg';

const logosObject = {
    "preliminary": preliminary,
    "elementary": elementary,
    "basic": basic,
    "professional": professional,
    "research": research,
    "aero": aero,
    "undefined": defaultLogo
}

function Logo() {
    let { level } = useParams();
    let headerLogo = logosObject[level]
    return (
        <Link to="/main" className="link">
            <img src={headerLogo} alt="Логотип Экзамен-Технолаб." className="header__logo" />
        </Link>
    );
}

export default Logo;