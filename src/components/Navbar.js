import { NavLink, useParams } from 'react-router-dom';

function Navbar() {
    let { level } = useParams();
    if (!level) level = 'default';
    return (
        <nav className="header__navbar">
            <NavLink to="/main" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link">
                <div className={`link__triangle link__triangle_level_${level}`}></div>
                Главная
            </NavLink>
            <NavLink to="/catalog" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link"> Каталог </NavLink>
            <NavLink to="/manuals" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link"> Обучение </NavLink>
            <NavLink to="/materials-for-download" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link"> Загрузки </NavLink>
            <NavLink to="/contacts" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link"> Контакты </NavLink>
            <NavLink to="/about" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link"> О нас </NavLink>
            {/*
            <NavLink to="/events" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link"> Мероприятия </NavLink>
    */}
        </nav>
    );
}

export default Navbar;