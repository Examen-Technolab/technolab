import texts from "../../utils/texts";

function TextSection(props) {
    return (
        <section className={`text-section ${props.class}`}>
            <div className={`text-section__background text-section__background_page_${props.page}`}>
                <div className="text-section__shape text-section__shape_polygon_left"></div>
                <div className="text-section__shape text-section__shape_polygon_right"></div>
                {texts[props.level]}
                {props.link}
            </div>
            <div className={`text-section__photo text-section__photo_page_${props.level}`}></div>
        </section>
    );

}
export default TextSection;