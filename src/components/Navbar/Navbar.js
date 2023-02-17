import { NavLink, useParams } from 'react-router-dom';

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  let { level } = useParams();
  if (!level) level = 'default';
  return (
    <nav className="navbar">
      <NavLink onClick={scrollToTop} to="/main" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link">
        Главная
      </NavLink>
      <NavLink onClick={scrollToTop} to="/catalog" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link"> Каталог </NavLink>
      <NavLink onClick={scrollToTop} to="/manuals" href="#manuals" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link"> Обучение </NavLink>
      <NavLink onClick={scrollToTop} to="/downloads" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link"> Загрузки </NavLink>
      <NavLink onClick={scrollToTop} to="/contacts" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link"> Контакты </NavLink>
      <NavLink onClick={scrollToTop} to="/about" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link"> О нас </NavLink>
      <NavLink onClick={scrollToTop} to="/partners" activeClassName={`highlighted-text highlighted-text_level_${level}`} className="link navbar__link"> Партнерам </NavLink>
    </nav>
  );
}

export default Navbar;