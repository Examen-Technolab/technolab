import partners from '../../utils/partners'
import Files from "../Files/Files";

function Partners() {
  return (
    <main className="section">
      <h1 className="hidden">Партнерам</h1>
      <Files key="Partners" list={partners} />
    </main>
  );
}
export default Partners;