import Tile from "../../../generic/Tile/Tile";

function FileLink(props) {

  return (
    <Tile level={props.level} tileClass="file-link__tile" linkTitle={props.linkTitle || 'Скачать файл.'} link={props.startLink + props.item.link} >
      <h2 className="text_uppercase file-link__title">{props.item.title}</h2>
      <p className="file-link__about">{props.item.text}</p>
      <p className="file-link__call">Нажмите, чтобы скачать</p>
    </Tile>
  )
}

export default FileLink;