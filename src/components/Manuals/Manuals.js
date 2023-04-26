import manuals from '../../utils/manuals'
import Files from "../Files/Files";

function Manuals() {
  return (
    <main id="manuals" className="section">
      <h1 className="hidden">Обучение</h1>
      <Files linkTitle="Открыть pdf-файл." key="Manuals" list={manuals} />
    </main>
  );
}
export default Manuals;