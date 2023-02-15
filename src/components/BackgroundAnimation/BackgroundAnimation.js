function BackgroundAnimation(props) {
  return (
    <div className="backgroundAnimation" >
      <ul className={`backgroundAnimation__circles backgroundAnimation__circles_theme_${props.theme}`} >
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
        <li></li>
      </ul >
    </div >
  )
}

export default BackgroundAnimation;