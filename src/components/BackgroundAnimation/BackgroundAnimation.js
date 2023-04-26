function BackgroundAnimation(props) {
  return (
    <div className={`backgroundAnimation backgroundAnimation_color_${(props.color) ? props.color : 'green'}`} >
      <ul className={`backgroundAnimation__list backgroundAnimation__list_color_${(props.color) ? props.color : 'green'}`} >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul >
    </div >
  )
}

export default BackgroundAnimation;