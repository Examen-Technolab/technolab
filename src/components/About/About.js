import about from '../../utils/about';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Tile from '../Tile/Tile';

function About() {
  return (
    <main className="section about">
      <h1 className="hidden">О нас</h1>
      <Tile tileClass="about__tile about__tile_type_main">
        <BackgroundAnimation /> <p className="text text_uppercase about__text_type_main"><b className="highlighted-text">ООО &laquo;Экзамен-Технолаб&raquo;</b> &mdash;&thinsp; один из&nbsp;ведущих российских
          разработчиков и&nbsp;поставщиков комплексных решений в&nbsp;сфере образования.
        </p>
      </Tile>
      {
        about.map(item => {
          return (
            <Tile tileClass={`about__tile about__tile_type_${item.type}`}>
              <h2 className={`text text_uppercase about__title about__title_type_${item.type}`}>{item.title}</h2>
              <p className={`text about__text about__text_type_${item.type}`}>{item.text}</p>
              {item.children ? <Tile tileClass={`about__tile about__tile_type_${item.children.type}`}>
                <h3 className={`text text_uppercase about__title about__title_type_${item.children.type}`}>{item.children.title}</h3>
                <p className={`text about__text about__text_type_${item.children.type}`}>{item.children.text}</p>
              </Tile> : <></>}
            </Tile>
          )
        })
      }
    </main>
  );
}
export default About;