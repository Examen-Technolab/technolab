import style from './FullScreenBanner.module.css';

export const FullScreenBanner = (props) => {
  return (
    <img className={style.banner} src={props.src} alt={props.alt} />
  )
}