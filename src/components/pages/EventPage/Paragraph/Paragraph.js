function Paragraph(props) {
  return (
    <>
      <h3 className="text paragraph__title highlighted-text">
        {props.title}
      </h3>
      <p className="text paragraph__text">{props.text}</p>
    </>
  );
}
export default Paragraph;