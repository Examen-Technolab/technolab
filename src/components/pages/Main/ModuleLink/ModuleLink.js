import Tile from "../../../tiles/Tile/Tile";

function ModuleLink(props) {
  return (
    <Tile linkTitle={props.linkTitle} link={`/catalog/${props.level}/kit`} target="_self" tileClass={`module-link module-link_level_${props.level}`}>
      <div className={props.level ? `module-link__icon module-link__icon_level_${props.level}` : 'hidden'}></div>
      <p className="text text_uppercase module-link__text">{props.title}</p>
    </Tile>
  )
}

export default ModuleLink;