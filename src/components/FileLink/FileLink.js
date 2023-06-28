import Tile from "../Tile/Tile";

function FileLink(props) {
  return (
    <li className="file-link">
      <Tile tileClass="file-link__tile" linkTitle={props.linkTitle || 'Скачать файл.'} link={props.item.link} >
        <h2 className="text text_uppercase highlighted-text file-link__title">{props.item.title}</h2>
        <p className="text file-link__about">{props.item.text}</p>
        <p className="text file-link__call">Нажмите, чтобы скачать</p>
      </Tile>
    </li>
  )
}

export default FileLink;