import React from "react";

import Contact from "../../Contact/Contact";
import Tile from "../../tiles/Tile/Tile";

import api from "../../../utils/Api";
import { appStore } from "../../../stores/AppStore";

function Contacts(props) {

  React.useEffect(() => {
    appStore.setLoading(true);
    api.getList(props.list, props.setList, 'contacts', () => {
      appStore.setLoading(false);
    });
  }, []);


  return (
    <main className="section contacts">
      <h1 className="hidden">Контакты</h1>
      <Tile tileClass="text text_uppercase contacts__tile contacts__tile_type_main">
        <p className="text text_uppercase contacts__main-text"> ООО &laquo;Экзамен-Технолаб&raquo; &mdash;&thinsp; один из&nbsp;ведущих российских
          разработчиков и&nbsp;поставщиков комплексных решений в&nbsp;сфере образования.</p>
      </Tile>
      {
        props.list.map((item, index) => {
          return <Contact key={"contact" + index} type={item.type} linkTitle={item.linkTitle} tileClass={`contacts__tile contacts__tile_type_${item.type}`} link={item.link} text={item.text} title={item.title} />
        })
      }
    </main>
  );
}
export default Contacts;