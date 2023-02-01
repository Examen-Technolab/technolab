import FileLink from "./../FileLink/FileLink";
import partners from '../../utils/partners'

function Partners() {
    return (
        <section className="section flex">
            <ul className="list">
                {
                    partners.map((item, index) => {
                        return (
                            <FileLink key={'Partners' + index.toString()} item={item} index={index} />
                        )
                    })
                }
            </ul>
        </section>
    );
}
export default Partners;