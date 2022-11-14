import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
    return (
        <header className="header">
            <Switch>
                <Route path="/main/:level">
                    <Logo />
                    <Navbar />
                </Route>
                <Route path="/">
                    <Logo />
                    <Navbar />
                </Route>
            </Switch>
        </header>
    );
}

export default Header;