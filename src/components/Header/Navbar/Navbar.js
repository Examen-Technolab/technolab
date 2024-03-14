import style from './Navbar.module.css';

import { NavLink, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const navLinks = [
  {
    link: '/main',
    title: 'Главная'
  }, {
    link: '/catalog',
    title: 'Каталог'
  }, {
    link: '/education',
    title: 'Обучение'
  }, {
    link: '/downloads',
    title: 'Загрузки'
  }, {
    link: '/contacts',
    title: 'Контакты'
  }, {
    link: '/about',
    title: 'О нас'
  }, {
    link: '/partners',
    title: 'Партнерам'
  }, {
    link: '/events',
    title: 'Мероприятия'
  },
]

function Navbar() {
  const location = useLocation()
  console.log(location.pathname);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  let { level } = useParams();
  if (level) {
    level = level.includes('-') ? level.substring(0, level.indexOf('-')) : level;
  } else level = 'default';
  return (
    <nav className={style.navbar}>
      {
        navLinks.map((navLink, index) => (
          <NavLink key={'headerNavLink' + index} onClick={scrollToTop} to={navLink.link} activeClassName={`highlighted-text highlighted-text_level_${level}`} className={`link ${style.link}`}>
            {navLink.title}
          </NavLink>))
      }
    </nav>
  );
}

export default Navbar;