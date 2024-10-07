import { appStore } from '../../../../stores/AppStore';
import style from './Navbar.module.css';

import { NavLink } from 'react-router-dom';


const scrollToTop = () => {
  window.scrollTo(0, 0);
}

// const clickHandler = (link) =>{
//   if(link === '/catalog')
//     setTimeout(()=>{
//   window.location.reload();
//   }, 100);
//   scrollToTop();
// }

function Navbar({ navLinks }) {

  return (
    <nav className={style.navbar}>
      {
        navLinks.map((navLink, index) => (
          <NavLink key={'headerNavLink' + index} onClick={scrollToTop} to={navLink.link} activeClassName={`highlighted-text highlighted-text_level_${appStore.level}`} className={style.link}>
            {navLink.title}
          </NavLink>))
      }
    </nav>
  );
}

export default Navbar;