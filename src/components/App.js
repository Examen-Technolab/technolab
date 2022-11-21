import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Catalog from './Catalog';
import Manuals from './Manuals';
//import Events from './Events';
import TextSection from './TextSection';
import Downloads from './Downloads';
import Product from './Product';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

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
          <Route path="/contacts">
            <TextSection class="section" level="contacts" page="contacts" />
          </Route>
          <Route path="/about">
            <TextSection class="section" level="about" page="about" />
          </Route>
          <Route path="/downloads">
            <Downloads />
          </Route>
          {/*
          <Route path="/events">
            <Events />
          </Route> 
          */}
          <Footer />
          <div className="triangle"></div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
