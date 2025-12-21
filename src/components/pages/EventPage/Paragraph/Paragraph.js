function Paragraph({ title, text }) {
  return (
    <>
      {title && <h3 className={`paragraph__title highlighted-text ${text ? '' : 'paragraph__title_none-text'}`}>
        {title}
      </h3>}
      {
        text &&
        <p className={`paragraph__text ${title ? '' : 'paragraph__text_none-title'}`}>{text}</p>
      }
    </>
  );
}
export default Paragraph;