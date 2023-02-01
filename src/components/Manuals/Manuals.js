import Manual from "../Manual/Manual";
import manuals from '../../utils/manuals'

function Manuals() {
    return (
        <section id="manuals" className="section">
            <ul className="list">
                {
                    manuals.map((item, index) => {
                        return (
                            <Manual key={'Manual' + index.toString()} manual={item} index={index} />
                        )
                    })
                }
            </ul>
        </section>
    );
}
export default Manuals;