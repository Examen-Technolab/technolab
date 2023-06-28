import { useState } from "react";
import { useEffect } from "react";

import Select from "../Select/Select";

function Filter(props) {

  const [filter, setFilter] = useState('');

  function handleSelect(filter) {
    props.setList(filter === '' ? props.list : props.list.filter((item) => { return item.type === filter }))
  }

  useEffect(() => {
    handleSelect(filter)
  }, [filter])

  return (
    <Select options={props.options} setFilter={setFilter} />
  );
}
export default Filter;