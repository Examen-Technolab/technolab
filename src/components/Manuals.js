import Manual from "./Manual";
import manuals from '../utils/manuals'

function Manuals() {
    return (
        <section className="section flex">
            <ul className="list">
                {
                    manuals.map((item, index) => {
                        return (
                            <Manual key={index.toString()} manual={item} index={index} />
                        )
                    })
                }
            </ul>
        </section>
    );
}
export default Manuals;