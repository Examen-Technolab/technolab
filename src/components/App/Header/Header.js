import style from './Header.module.css';

import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

//вынести
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
  },
  {
    link: '/events',
    title: 'Мероприятия'
  },
]

function Header() {

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <Navbar navLinks={navLinks} />
      </div>
    </header>
  );
}

export default Header;