/*
пропсы:
title- всплывающая подсказка
onClick - обоработчик клика
*/
function PlusButton(props) {

  return (
    <button type="button" title={props.title} onClick={props.onClick} className="plus-btn" />
  );
}
export default PlusButton;