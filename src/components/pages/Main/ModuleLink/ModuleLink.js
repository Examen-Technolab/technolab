import Tile from "../../../generic/Tile/Tile";

function ModuleLink(props) {
  return (
    <Tile linkTitle={props.linkTitle} link={`/catalog/${props.id}/kit`} target="_self" tileClass={`module-link module-link_level_${props.level}`}>
      <div className={props.level ? `module-link__icon module-link__icon_level_${props.level}` : 'hidden'}></div>
      <p className="text_uppercase module-link__text">{props.title}</p>
    </Tile>
  )
}

export default ModuleLink;