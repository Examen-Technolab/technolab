import JsxParser from "react-jsx-parser";
import cls from './Video.module.css';

export const Video = ({ jsx }) => {
  return (
    <div className={cls.video}>
      <JsxParser jsx={jsx} />
    </div>
  )
}