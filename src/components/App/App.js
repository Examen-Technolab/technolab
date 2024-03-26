import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';

import image404 from '../../images/404.svg';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Triangle from './Triangle/Triangle';
import { ProfileBtn } from './ProfileBtn/ProfileBtn';
import { Preloader } from './Preloader/Preloader';

import { FullScreenBanner } from '../pages/FullScreenBanner/FullScreenBanner';
import BackgroundAnimation from '../generic/BackgroundAnimation/BackgroundAnimation';

import Main from '../pages/Main/Main';
import { Product } from '../pages/Product/Product';
import Contacts from '../pages/Contacts/Contacts';
import Files from '../pages/Files/Files';
import About from '../pages/About/About';
import Events from '../pages/Events/Events';
import EventPage from '../pages/EventPage/EventPage';

import FilesWithFilter from '../pages/FilesWithFilter/FilesWithFilter';
import Education from '../pages/Education/Education';
import UpButton from './UpButton/UpButton';

import filterForManuals from '../../utils/filterForManuals';


import { Admin } from '../pages/Admin/Admin';

import { Catalog } from '../pages/Catalog/Catalog';


import { Popup } from '../Popup/Popup';

import { appStore } from '../../stores/AppStore';





function App() {

  const [education, setEducation] = useState([]);
  const [manuals, setManuals] = useState([]);
  const [partners, setPartners] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [about, setAbout] = useState([]);
  //const [upBtnClass, setUpBtnClass] = useState('hidden');


  const [scrollY, setScrollY] = useState(false);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    appStore.checkUser();
  }, [])

  // function onUpButtonClick() {
  //   window.scrollTo(0, 0);
  // }

  // function handleScroll() {
  //   setUpBtnClass((window.scrollY < window.innerHeight / 2) ? 'hidden' : '');
  //   animateMain(firstMainSectionRef, .5, setFirstMainSectionClass);
  //   animateMain(mainMediaRef, 1.5, setMainMediaClass);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, [])




  return (
    <div className="background">
      <div className="page">
        <BrowserRouter>
          <Preloader />
          <Header />
          <ProfileBtn />
          <Switch>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path="/main">
              <Main scrollY={scrollY} />
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route path={`/catalog/:id`}>
              <Product />
            </Route>
            <Route exact path="/education">
              <Education list={education} setList={setEducation} title="Обучение" />
            </Route>
            <Route path="/education/manuals">
              <FilesWithFilter options={filterForManuals} list={manuals} setList={setManuals} title="Пособия" />
            </Route>
            <Route path="/downloads">
              <Files list={downloads} setList={setDownloads} isSimple={true} title="Загрузки" />
            </Route>
            <Route path="/contacts">
              <Contacts list={contacts} setList={setContacts} />
            </Route>
            <Route path="/about">
              <About list={about} setList={setAbout} />
            </Route>
            <Route path="/partners">
              <Files list={partners} setList={setPartners} title="Партнерам" />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route path={`/events/:eventUrl`}>
              <EventPage />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route path="*">
              <FullScreenBanner src={image404} alt="Страница не найдена" />
            </Route>
          </Switch>

          {/* <UpButton onButtonClick={onUpButtonClick} upBtnClass={upBtnClass} /> */}
          <Triangle />
          <Popup />
          <Footer />

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

