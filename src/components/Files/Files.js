import FileLink from '../FileLink/FileLink';

function Files(props) {
  return (
    <ul className="files">
      {
        props.list.map((item, index) => {
          return (
            <FileLink linkTitle={props.linkTitle} key={props.key + index.toString()} item={item} index={index} />
          )
        })
      }
    </ul>
  );
}
export default Files;