import downloads from '../../utils/downloads'
import Files from '../Files/Files';

function Downloads() {
  return (
    <main className="section">
      <h1 className="hidden">Загрузки</h1>
      <Files key="Downloads" list={downloads} />
    </main>
  );
}
export default Downloads;