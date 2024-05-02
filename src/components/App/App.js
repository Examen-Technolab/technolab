import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import image404 from '../../images/404.svg';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Product } from '../Product/Product';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import Events from '../Events/Events';
import EventPage from '../EventPage/EventPage';
import Triangle from '../Triangle/Triangle';
import Files from '../Files/Files';
import FilesWithFilter from '../FilesWithFilter/FilesWithFilter';
import Education from '../Education/Education';
import UpButton from '../UpButton/UpButton';

import filterForManuals from '../../utils/filterForManuals';


import { Admin } from '../Admin/Admin';

import { Catalog } from '../Catalog/Catalog';


import { Popup } from '../Popup/Popup';
import { appStore } from '../../stores/AppStore';
import { ProfileBtn } from '../ProfileBtn/ProfileBtn';
import { Preloader } from '../Preloader/Preloader';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { FullScreenBanner } from '../FullScreenBanner/FullScreenBanner';



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
            <Route path="/manuals">
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

