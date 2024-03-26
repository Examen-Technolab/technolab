function LinkButton(props) {
  return (
    <a className={`link-button link-button_color_${props.color}`} href={props.link} title={props.title} target={props.target}>{props.children}</a>
  );
}
export default LinkButton;