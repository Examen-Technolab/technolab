import Manual from "../Manual/Manual";
import manuals from '../../utils/manuals'

function Manuals() {
    return (
        <main id="manuals" className="section">
            <h1 className="title">Обучение</h1>
            <ul className="list">
                {
                    manuals.map((item, index) => {
                        return (
                            <Manual key={'Manual' + index.toString()} manual={item} index={index} />
                        )
                    })
                }
            </ul>
        </main>
    );
}
export default Manuals;