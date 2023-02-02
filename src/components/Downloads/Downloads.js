import software from '../../utils/software'
import FileLink from '../FileLink/FileLink';

function Downloads() {
    return (
        <main className="section">
            <h1 className="title">Загрузки</h1>
            <ul className="list">
                {
                    software.map((item, index) => {
                        return (
                            <FileLink key={'Downloads' + index.toString()} item={item} index={index} />
                        )
                    })
                }
            </ul>
        </main>
    );
}
export default Downloads;