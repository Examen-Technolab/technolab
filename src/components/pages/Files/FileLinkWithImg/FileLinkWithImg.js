import DoubleTile from "../../../generic/DoubleTile/DoubleTile";


function FileLinkWithImg(props) {
  return (
    <DoubleTile
      type='img'
      promo={
        <>
          <img className="file-link-with-img__img" alt="Обложка" src={props.startImg + props.file.img} />
        </>
      }
      about={
        <>
          <h2 className="text text_uppercase highlighted-text file-link-with-img__title">{props.file.title}</h2>
          <h3 className="text text_uppercase file-link-with-img__subtitle">{props.file.subtitle}</h3>
          <p className="text file-link-with-img__about">{props.file.text}</p>
        </>
      }
      links={[
        {
          color: '',
          link: props.startLink + props.file.link,
          linkTitle: 'Скачать файл',
          title: 'Скачать',
          target: '__blank',
        }
      ]} />
  )
}

export default FileLinkWithImg;