import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Manuals from '../Manuals/Manuals';
import Partners from '../Partners/Partners';
import Product from '../Product/Product';
import Downloads from '../Downloads/Downloads';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';

function App() {
  return (
    <div className="background">
      <div className="page">
        <BrowserRouter>
          <Header />
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
            <div className="triangle rotation"></div>
          </Route>
          <Route path={`/catalog/:level`}>
            <Product></Product>
            <div className="triangle rotation"></div>
          </Route>
          <Route path="/manuals">
            <Manuals />
            <div className="triangle rotation"></div>
          </Route>
          <Route path="/downloads">
            <Downloads />
            <div className="triangle rotation"></div>
          </Route>
          <Route path="/contacts">
            <Contacts />
            <div className="triangle rotation"></div>
          </Route>
          <Route path="/about">
            <About />
            <div className="triangle rotation"></div>
          </Route>
          <Route path="/partners">
            <Partners />
            <div className="triangle rotation"></div>
          </Route>
          {/*
          <Route path="/events">
            <Events />
          </Route>
          */}
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
