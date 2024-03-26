import React from 'react';

import api from '../../../utils/Api';
import BackgroundAnimation from '../../generic/BackgroundAnimation/BackgroundAnimation';
import Tile from '../../tiles/Tile/Tile';
import { appStore } from '../../../stores/AppStore';

function About(props) {

  React.useEffect(() => {
    appStore.setLoading(true);
    api.getList(props.list, props.setList, 'about', () => {
      appStore.setLoading(false);
    });
  }, []);

  return (
    <main className="section about">
      <h1 className="hidden">О нас</h1>
      <Tile tileClass="about__tile about__tile_type_main">
        <BackgroundAnimation /> <p className="text text_uppercase about__text_type_main"><b className="highlighted-text">ООО &laquo;Экзамен-Технолаб&raquo;</b> &mdash;&thinsp; один из&nbsp;ведущих российских
          разработчиков и&nbsp;поставщиков комплексных решений в&nbsp;сфере образования.
        </p>
      </Tile>
      {
        props.list.map((item, index) => {
          return (
            <Tile key={"about" + index} tileClass={`about__tile about__tile_type_${item.type}`}>
              <h2 className={`text text_uppercase about__title about__title_type_${item.type}`}>{item.title}</h2>
              <p className={`text about__text about__text_type_${item.type}`}>{item.text}</p>
              {item.children_type ? <Tile tileClass={`about__tile about__tile_type_${item.children_type}`}>
                <h3 className={`text text_uppercase about__title about__title_type_${item.children_type}`}>{item.children_title}</h3>
                <p className={`text about__text about__text_type_${item.children_type}`}>{item.children_text}</p>
              </Tile> : <></>}
            </Tile>
          )
        })
      }
    </main>
  );
}
export default About;