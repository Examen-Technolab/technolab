import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Manuals from '../Manuals/Manuals';
//import Events from '../Events/Events';
import TextSection from '../TextSection/TextSection';
import Partners from '../Partners/Partners';
import Product from '../Product/Product';
import Downloads from '../Downloads/Downloads';

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
            <Product></Product>
          </Route>
          <Route path="/manuals">
            <Manuals />
          </Route>
          <Route path="/downloads">
            <Downloads />
          </Route>
          <Route path="/contacts">
            <TextSection class="section" level="contacts" page="contacts" />
          </Route>
          <Route path="/about">
            <TextSection class="section" level="about" page="about" />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          {/*
          <Route path="/events">
            <Events />
          </Route> 
          */}
          <Footer />
          <div className="triangle rotation"></div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
