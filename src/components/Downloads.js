function Downloads() {
    return (
        <section className="section flex downloads">
            <a download={true} title="Скачать zip-файл" className="downloads__link" target="_blank" rel="noreferrer" href="http://examen-technolab.ru/downloads/partners.zip">
                <button className="downloads__btn">
                    <p className="text downloads__btn-text">Материалы партнеров</p>
                </button>
            </a>
            <a download={true} title="Скачать zip-файл" className="downloads__link" target="_blank" rel="noreferrer" href="http://examen-technolab.ru/downloads/prices.zip">
                <button className="downloads__btn downloads__btn_rotate">
                    <p className="text downloads__btn-text  downloads__btn-text_rotate">Прайс-листы</p>
                </button>
            </a>
        </section>
    );
}

export default Downloads;