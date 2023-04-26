import contacts from "../../utils/contacts";
import Contact from "../Contact/Contact";
import Tile from "../Tile/Tile";

function Contacts() {
  return (
    <main className="section contacts">
      <h1 className="hidden">Контакты</h1>
      <Tile tileClass="text text_uppercase contacts__tile contacts__tile_type_main">
        <p className="text text_uppercase contacts__main-text"> ООО &laquo;Экзамен-Технолаб&raquo; &mdash;&thinsp; один из&nbsp;ведущих российских
          разработчиков и&nbsp;поставщиков комплексных решений в&nbsp;сфере образования.</p>
      </Tile>
      {
        contacts.map(item => {
          return <Contact type={item.type} linkTitle={item.linkTitle} tileClass={`contacts__tile contacts__tile_type_${item.type}`} link={item.link} text={item.text} title={item.title} />
        })
      }
    </main>
  );
}
export default Contacts;