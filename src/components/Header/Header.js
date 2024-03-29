import { NavLink, Switch, Route } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

function Header() {

  return (
    <header className={`header`}>
      <div className="header__container">
        <Switch>
          <Route path="/catalog/:level">
            <Logo />
            <Navbar />
          </Route>
          <Route path="/">
            <Logo />
            <Navbar />
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default Header;