import style from './Header.module.css';

import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

function Header() {

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;