function Paragraph(props) {
  return (
    <>
      <h3 className="paragraph__title highlighted-text">
        {props.title}
      </h3>
      <p className="paragraph__text">{props.text}</p>
    </>
  );
}
export default Paragraph;