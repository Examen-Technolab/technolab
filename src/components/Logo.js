import { Link, useParams } from 'react-router-dom';
import preliminary from '../images/logo-preliminary.svg';
import elementary from '../images/logo-elementary.svg';
import basic from '../images/logo-basic.svg';
import professional from '../images/logo-professional.svg';
import research from '../images/logo-research.svg';
import aero from '../images/logo-aero.svg';
import defaultLogo from '../images/logo.svg';

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