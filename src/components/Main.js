import React from 'react';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import AboutModule from './AboutModule';
import MainLink from './MainLink';

function Main() {
    const [preliminaryAnimation, setPreliminaryAnimation] = React.useState('');
    const [elementaryAnimation, setElementaryAnimation] = React.useState('');
    const [basicAnimation, setBasicAnimation] = React.useState('');
    const [professionalAnimation, setProfessionalAnimation] = React.useState('');
    const [researchAnimation, setResearchAnimation] = React.useState('');
    const [aeroAnimation, setAeroAnimation] = React.useState('');
    const setAnimation = [setPreliminaryAnimation, setElementaryAnimation, setBasicAnimation, setProfessionalAnimation, setResearchAnimation, setAeroAnimation];
    const { url, path } = useRouteMatch();

    React.useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setAnimation[i]('');
            if (i < (setAnimation.length - 1)) i++; else i = 0;
            setAnimation[i]('scale');
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="section flex">
            <div className="main__navbar">
                <Link to="http://dobot.examen-technolab.ru/" target="_blank" rel="noreferrer" alt="Логотип Dobot." className="main__link main__link_level_dobot" />
                <MainLink url={url} animation={preliminaryAnimation} level="preliminary" text="Предварительный уровень." />
                <MainLink url={url} animation={elementaryAnimation} level="elementary" text="Начальный уровень." />
                <MainLink url={url} animation={basicAnimation} level="basic" text="Базовый уровень." />
                <MainLink url={url} animation={professionalAnimation} level="professional" text="Профессиональный уровень." />
                <MainLink url={url} animation={researchAnimation} level="research" text="Исследовательский уровень." />
                <MainLink url={url} animation={aeroAnimation} level="aero" text="Модуль аэро." />
            </div>
            <Switch>
                <Route path={`${path}/:level`}>
                    <AboutModule />
                </Route>
                <Route path={`${path}`}>
                    <AboutModule />
                </Route>
            </Switch>
        </main>
    );
}
export default Main;