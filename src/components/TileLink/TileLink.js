import Tile from "../Tile/Tile";

function TileLink(props) {
  return (
    <Tile linkTitle={props.linkTitle} link={props.link ? props.link : `/catalog/${props.level}/kit`} tileClass={`tile-link ${props.tileClass ? props.tileClass : ''}`}>
      <div className={props.level ? `tile-link__icon tile-link__icon_level_${props.level}` : 'hidden'}></div>
      <p className=" text text_uppercase tile-link__text">{props.title}</p>
    </Tile>
  )
}

export default TileLink;