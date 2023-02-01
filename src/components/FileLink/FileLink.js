function FileLink(props) {
    return (
        <li className="file-link">
            <a title="Скачать файл." className="file-link__container" target="_blank" rel="noreferrer" href={props.item.link}>
                <h2 className="text file-link__title">{props.item.title}</h2>
                <p className="text file-link__about">{props.item.text}</p>
                <p className="text file-link__call">Нажмите, чтобы скачать</p>
            </a>
        </li>
    )
}

export default FileLink;