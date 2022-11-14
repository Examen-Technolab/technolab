import texts from "../utils/texts";

function TextSection(props) {
    return (
        <section className={props.class}>
            <div className={`text-background text-background_page_${props.page}`}>
                <div className="text-background__shape text-background__shape_polygon_left"></div>
                <div className="text-background__shape text-background__shape_polygon_right"></div>
                {texts[props.level]}
                {props.link}
            </div>
            <div className={`photo photo_page_${props.level}`}></div>
        </section>
    );

}
export default TextSection;