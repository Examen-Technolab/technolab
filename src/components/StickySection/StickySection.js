import { useEffect } from "react";
import TileWithScroll from "../tiles/TileWithScroll/TileWithScroll";
import { useState } from "react";
import { useRef } from "react";
import Tile from "../tiles/Tile/Tile";

function StickySection(props) {

  const [firstSectionClass, setFirstSectionClass] = useState('');
  const [mediaClass, setMediaClass] = useState('');
  const firstSectionRef = useRef();
  const mediaRef = useRef();

  function animation(ref, k, setClass) {
    if (ref.current.offsetTop >= window.innerHeight * k) setClass('disappear-opacity');
    else setClass('appear-opacity');
  }

  function handleScroll() {
    animation(firstSectionRef, .5, setFirstSectionClass);
    animation(mediaRef, 1.5, setMediaClass);
  }

  useEffect(() => {
    handleScroll();
  }, [props.scrollY])

  return (
    <section id={props.idName} className="sticky-section">

      <div ref={firstSectionRef} className={`sticky-section__container ${firstSectionClass}`}>
        <div className="sticky-section__grid">
          <Tile level="basic" tileClass="sticky-section__tile-center">{props.titleTile}</Tile>
          <TileWithScroll tileClass="sticky-section__tile" >{props.leftTile}</TileWithScroll>
          <TileWithScroll tileClass="sticky-section__tile">
            {props.rightTile}
          </TileWithScroll>
        </div>
      </div>

      <div ref={mediaRef} className={`sticky-section__container ${mediaClass}`}>
        {props.poster ?
          <video className="sticky-section__media sticky-section__media_video" controls poster={props.poster} src={props.media} alt={props.altMedia} ></video> :
          <img className="sticky-section__media " src={props.media} alt={props.altMedia} />}
      </div>

      <div className="sticky-section__container">
        {props.listTitle ?
          <Tile tileClass="sticky-section__title-tile" level="elementary">
            <h3 className="text text_uppercase">{props.listTitle.title}</h3>
          </Tile> : <></>}
        <ul className="sticky-section__grid sticky-section__list">
          {props.list}
        </ul>
        {props.listLink ?
          <Tile tileClass="sticky-section__title-tile" level="preliminary" link={props.listLink.link} linkTitle={props.listLink.linkTitle} target='_self'>
            <h3 className="text text_uppercase">{props.listLink.title} &#10230;</h3>
          </Tile> : <></>}

      </div>
    </section>
  );
}
export default StickySection;