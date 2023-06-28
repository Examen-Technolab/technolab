import DoubleTile from '../DoubleTile/DoubleTile';
import FileLink from '../FileLink/FileLink';
import FileLinkWithImg from '../FileLinkWithImg/FileLinkWithImg';

function Files(props) {
  return (
    <main className="section">
      <h1 className="hidden">{props.title}</h1>
      {props.children}
      <ul className="files">
        {
          props.list.map((file, index) => {
            return (
              file.img ?
                <li>
                  <FileLinkWithImg file={file} />
                </li> :
                <li>
                  <FileLink linkTitle={props.linkTitle} key={props.key + index.toString()} item={file} index={index} />
                </li>
            )
          })
        }
      </ul>
    </main>
  );
}
export default Files;