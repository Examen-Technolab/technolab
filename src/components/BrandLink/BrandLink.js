import { useState } from "react";

function BrandLink(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <a onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className="brand-link" href={props.link} target="__blank" title={`Перейти на сайт ${props.title}`} >
      <img className="brand-link__img" src={isHover ? props.hoverImg : props.img} alt={`Логотип ${props.title}`} />
    </a>
  );
}
export default BrandLink;