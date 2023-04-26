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
import Events from '../Events/Events';
import EventPage from '../EventPage/EventPage';
import Triangle from '../Triangle/Triangle';

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
          </Route>
          <Route path={`/catalog/:level`}>
            <Product />
          </Route>
          <Route path="/manuals">
            <Manuals />
          </Route>
          <Route path="/downloads">
            <Downloads />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route path={`/events/:eventPage`}>
            <EventPage />
          </Route>
          <Triangle />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
