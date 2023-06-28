import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Product from '../Product/Product';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import Events from '../Events/Events';
import EventPage from '../EventPage/EventPage';
import Triangle from '../Triangle/Triangle';
import Popup from '../Popup/Popup';
import Files from '../Files/Files';
import FilesWithFilter from '../FilesWithFilter/FilesWithFilter';

import manuals from '../../utils/manuals';
import downloads from '../../utils/downloads';
import partners from '../../utils/partners';
import filterForManuals from '../../utils/filterForManuals';

function App() {

  const [popupIsVisibel, setPopupIsVIsible] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  function closePopup() {
    setPopupIsVIsible(false);
    setPopupContent('');
  }

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
            <Catalog setPopupIsVIsible={setPopupIsVIsible} setPopupContent={setPopupContent} />
          </Route>
          <Route path={`/catalog/:level`}>
            <Product setPopupIsVIsible={setPopupIsVIsible} setPopupContent={setPopupContent} />
          </Route>
          <Route path="/manuals">
            <FilesWithFilter options={filterForManuals} list={manuals} title="Обучение" />
          </Route>
          <Route path="/downloads">
            <Files isSimple={true} list={downloads} title="Загрузки" />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/partners">
            <Files list={partners} title="Партнерам" />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route path={`/events/:eventUrl`}>
            <EventPage />
          </Route>
          <Triangle />
          <Popup closePopup={closePopup} isVisible={popupIsVisibel} children={popupContent} />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
