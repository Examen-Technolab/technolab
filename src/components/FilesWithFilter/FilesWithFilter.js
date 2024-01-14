import { useState } from "react";

import Filter from "../Filter/Filter";
import Files from "../Files/Files";


function FilesWithFilter(props) {

  function setLists(newList) {
    props.setList(newList);
    setFilesList(newList);
  }

  const [filesList, setFilesList] = useState(props.list);

  return (
    <Files list={filesList} setList={setLists} title={props.title} >
      <Filter list={props.list} setList={setFilesList} options={props.options} />
    </Files>
  );
}
export default FilesWithFilter;