import Manual from "./Manual";
import manuals from '../utils/manuals'

function Manuals() {
    return (
        <section className="section">
            <ul className="list">
                {
                    manuals.map((item, index) => {
                        return (
                            <Manual manual={item} index={index} />
                        )
                    })
                }
            </ul>
        </section>
    );
}
export default Manuals;