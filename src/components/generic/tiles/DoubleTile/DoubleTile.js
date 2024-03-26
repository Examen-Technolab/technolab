import Tile from "../Tile/Tile";
import TileWithScroll from "../TileWithScroll/TileWithScroll";
import LinkButton from "./LinkButton/LinkButton";

function DoubleTile(props) {
  return (
    <div className="double-tile">
      <Tile tileClass={`double-tile__item double-tile__item_type_promo double-tile__item_type_${props.type} ${props.promoClass || ''}`}>
        {props.promo}
      </Tile>
      <div className="double-tile__item double-tile__item_type_about">
        <TileWithScroll tileClass="double-tile__about">
          {props.about}
        </TileWithScroll>
        <ul className="double-tile__links-container">
          {
            props.links.map((item, index) => {
              return (
                <LinkButton key={"linkBtn" + index} color={item.color} link={item.link} target={item.target || '_self'} title={item.linkTitle || 'Перейти'}>{item.title || 'Перейти'}</LinkButton>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
export default DoubleTile;