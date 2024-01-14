import React from 'react';

import FileLink from '../FileLink/FileLink';
import FileLinkWithImg from '../FileLinkWithImg/FileLinkWithImg';

import api from '../../utils/Api';
import { appStore } from '../../stores/AppStore';

function Files(props) {

  const pathname = window.location.pathname.split('/');
  const param = pathname[pathname.length - 1];
  let startLink, startImg;

  switch (param) {
    case 'manuals':
      startLink = 'https://examen-technolab.ru/manuals/';
      startImg = 'https://examen-technolab.ru/images/manuals/';
      break;
    default:
      startLink = '';
      startImg = '';
  }

  React.useEffect(() => {
    appStore.setLoading(true);
    api.getList(props.list, props.setList, param, () => {
      appStore.setLoading(false);
    });
  }, []);


  return (
    <main className="section">
      <h1 className="hidden">{props.title}</h1>
      {props.children}
      <ul className="files">
        {
          props.list.map((file, index) => {
            return (
              file.img ?
                <li key={"file" + index}>
                  <FileLinkWithImg startLink={startLink} startImg={startImg} file={file} />
                </li> :
                <li key={"file" + index}>
                  <FileLink startLink={startLink} linkTitle={props.linkTitle} item={file} index={index} />
                </li>
            )
          })
        }
      </ul>
    </main>
  );
}
export default Files;