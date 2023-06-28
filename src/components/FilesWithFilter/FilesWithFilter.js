import { useState } from "react";

import Filter from "../Filter/Filter";
import Files from "../Files/Files";

function FilesWithFilter(props) {

  const [filesList, setFilesList] = useState(props.list);

  return (
    <Files list={filesList} title={props.title} isSimple={false} >
      <Filter list={props.list} setList={setFilesList} options={props.options} />
    </Files>
  );
}
export default FilesWithFilter;