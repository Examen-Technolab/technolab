function Tile(props) {
  return (
    <>
      {
        props.link ?
          <a title={props.linkTitle ? props.linkTitle : 'Скачать файл.'} className={`tile tile_type_link ${props.tileClass}`} target={props.target ? props.target : "_blank"} rel="noreferrer" href={props.link}>
            {props.children}
          </a> :
          <div className={`tile ${props.tileClass}`}>
            {props.children}
          </div>
      }
    </>
  );
}
export default Tile;