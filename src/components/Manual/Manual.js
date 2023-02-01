function Manual(props) {
    return (
        <li className="manual">
            <a title="Открыть pdf-файл" className="manual__link" target="_blank" rel="noreferrer" href={props.manual.link}>
                <img className="manual__img" alt="Обложка" src={props.manual.img} />
                <h2 className="text manual__title">{props.manual.title}</h2>
                <h3 className="text manual__subtitle">{props.manual.subtitle}</h3>
                <p className="text manual__about">{props.manual.text}</p>
                <p className="text manual__call">Нажмите, чтобы скачать</p>
            </a>
        </li>
    )
}

export default Manual;