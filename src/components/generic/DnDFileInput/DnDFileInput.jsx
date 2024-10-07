import { useEffect, useRef, useState } from "react";

import style from './DnDFileInput.module.css';

const getImgUrl = (file) => {
  // if (file.name.endsWith('.doc') || file.name.endsWith('.docx'))
  //   return '';
  // if (file.name.endsWith('.pdf'))
  //   return '';
  return URL.createObjectURL(file);
}

export const DnDFileInput = ({
  title = "Загрузить документы",
  files,
  setFiles,
  maxCount,
  name,
  accept,
  required = false,
  maxMb,
  timeout = 0,
  disabled = false

}) => {

  const inputRef = useRef();

  const [error, setError] = useState('');

  const [isDragging, setIsDragging] = useState(false);

  const [dragCounter, setDragCounter] = useState(0);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter((counter) => counter + 1);
  }

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter((counter) => counter - 1);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dTransfer = e.dataTransfer;
    if (dTransfer.files && dTransfer.files.length > 0) {
      handleDropChange(dTransfer);
      setDragCounter(0);
    }
  }

  const onValidate = (newFiles) => {
    if (newFiles.length) {
      if (newFiles.length + files.length > maxCount)
        return `Допустипо максимум файлов: ${maxCount}`

      let message = '';

      newFiles.forEach(file => {
        if (!accept.split(', ').reduce((acc, format) => acc || file.name.endsWith(format), false) && !message) {
          message = 'Допустимые форматы: ' + accept;
        } else if (file.size > (maxMb * 1024 * 1024) && !message) {
          message = `Максимальный размер файла ${maxMb} Мб`;
        }
      })
      return message;

    } else if (required && !files.length) {
      return 'Необходимо приложить хотя бы один файл';
    }
    return '';
  }

  const deleteError = () => {
    setError('');
  }

  const handleDropChange = (target) => {
    if (disabled) return;
    const newFiles = [...target.files];

    const message = onValidate(newFiles);
    setError(message);

    if (timeout && message) {
      setTimeout(() => {
        deleteError();
      }, timeout)
    }

    if (!message && newFiles.length) {
      setFiles([...files, ...newFiles]);
    }

    target.value = '';
  }

  const deleteDocument = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  useEffect(() => {
    setIsDragging(dragCounter ? true : false)
  }, [dragCounter])

  return (
    <div ref={inputRef} className={style.dnd}>

      <h3>{title}</h3>

      <div
        className={style.container + ` ${isDragging ? style.container_dragging : ''}`}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <input
          disabled={disabled}
          hidden
          multiple
          type="file"
          id={name}
          name={name}
          required={required}
          accept={accept}
          onChange={(e) => { handleDropChange(e.target) }}
        />
        {
          !files.length ? (
            <label className={style.inputLabel + ' ' + style.hoverOpacity} htmlFor={name}>
              {disabled ? 'Для загрузки введите код продукта!' : 'Перетащите или выберите файлы'}
            </label>
          ) : (
            <>
              <ul className={style.files}>
                {
                  files.map((file, index) => {
                    return (
                      <li key={'file' + index} className={style.file}>
                        <img
                          className={style.img}
                          alt={file.name}
                          src={getImgUrl(file)}
                        />
                        <p className={style.name}>{file.name}</p>
                        <button type="button" className={style.crossBtn + ' ' + style.hoverOpacity} onClick={() => { deleteDocument(index) }}></button>
                      </li>
                    )
                  })
                }
                <label
                  hidden={files.length >= maxCount}
                  className={style.plusBtn + ' ' + style.hoverOpacity}
                  htmlFor={name}
                  onClick={deleteError}
                />
              </ul>
              <p className={style.countInfo}>Загружено {files.length} из {maxCount}</p>
            </>
          )
        }
      </div>
      <p className={style.error}>{error}</p>
    </div>
  )

}