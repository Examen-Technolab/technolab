import { Link, useParams } from 'react-router-dom';
import TextSection from './TextSection';

function AboutModule() {
    let { level } = useParams();
    let link = <></>;
    if (!level) level = 'main';
    else link =
        <div className='column'>
            <Link to={`/catalog/${level}/kit`} className={`link highlighted-text highlighted-text_level_${level}`}>
                <div className={`link__triangle link__triangle_level_${level} `}></div>
                Подробнее
            </Link>
        </div>;
    return (
        <TextSection page='main' level={level} link={link} />
    );
}

export default AboutModule;