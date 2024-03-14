import Tile from "../Tile/Tile";

function TileWithScroll(props) {
  return (
    <Tile level={props.level} tileClass={`tile-with-scroll ${props.tileClass}`}>
      {
        <ul className={props.level ? `tile-with-scroll__container tile-with-scroll__container_level_${props.level}` : 'tile-with-scroll__container'}>
          {props.children}
        </ul>
      }
    </Tile>
  );
}
export default TileWithScroll;