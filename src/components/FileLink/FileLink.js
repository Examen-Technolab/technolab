import Tile from "../Tile/Tile";

function FileLink(props) {
  return (
    <li className="file-link">
      <Tile tileClass={props.item.img ? 'file-link__tile file-link__tile_grid' : 'file-link__tile'} linkTitle={props.linkTitle ? props.linkTitle : 'Скачать файл.'} link={props.item.link} >
        <img className={props.item.img ? 'file-link__img' : 'hidden'} alt="Обложка" src={props.item.img} />
        <h2 className="text text_uppercase highlighted-text file-link__title">{props.item.title}</h2>
        <h3 className={props.item.img ? 'text text_uppercase file-link__subtitle' : 'hidden'}>{props.item.subtitle}</h3>
        <p className="text file-link__about">{props.item.text}</p>
        <p className="text file-link__call">Нажмите, чтобы скачать</p>
      </Tile>
    </li>
  )
}

export default FileLink;