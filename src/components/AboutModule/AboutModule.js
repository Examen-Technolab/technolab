import { Link, useParams } from 'react-router-dom';

import TextSection from '../TextSection/TextSection';

function AboutModule() {
    let { level } = useParams();
    let link = <></>;
    if (!level) level = 'main';
    else link =
        <p className="text">
            <Link to={`/catalog/${level}/kit`} className={`link highlighted-text highlighted-text_level_${level}`}>
                Подробнее
            </Link>
        </p>
    return (
        <TextSection page='main' level={level} link={link} />
    );
}

export default AboutModule;