function Contacts() {
    return (
        <main className="section contacts">
        <h1 className="title">Контакты</h1>
        <p className="text contacts__paragraph contacts__main-text"> ООО &laquo;ЭКЗАМЕН-ТЕХНОЛАБ&raquo; &mdash;&thinsp; Авторизованный дистрибьютор на&nbsp;территории
            Российской Федерации, Республики Беларусь и&nbsp;Казахстана</p>
        <p className="text contacts__paragraph contacts__address">Адрес:
        <a className="link contacts__link" href="https://yandex.ru/maps/-/CCUCfDUPGC" target="__blank">
        Россия, 107045, г. Москва, ул. Сретенка д.24/2, стр.1.</a> </p>
        <p className="text contacts__paragraph contacts__support">Тех. поддержка:
        <a className="link contacts__link" href="mailto:support@examen-technolab.ru" target="__blank">
            support@examen-technolab.ru</a></p>
        <p className="text contacts__paragraph contacts__order">Заказ продукции:
        <a className="link contacts__link" href="mailto:zakaz@examen-technolab.ru" target="__blank">
        zakaz@examen-technolab.ru</a>
        </p>
        <p className="text contacts__paragraph contacts__phone">Телефон:
        <a className="link contacts__link" href="tel:+74956410023" target="__blank">
        +7 (495) 641-00-23</a></p>
      </main>
    );
}
export default Contacts;