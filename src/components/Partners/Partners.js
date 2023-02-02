import FileLink from "./../FileLink/FileLink";
import partners from '../../utils/partners'

function Partners() {
    return (
        <main className="section">
            <h1 className="title">Партнерам</h1>
            <ul className="list">
                {
                    partners.map((item, index) => {
                        return (
                            <FileLink key={'Partners' + index.toString()} item={item} index={index} />
                        )
                    })
                }
            </ul>
        </main>
    );
}
export default Partners;