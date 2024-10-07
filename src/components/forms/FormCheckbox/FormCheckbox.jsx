import style from './FormCheckbox.module.css'

export const FormCheckbox = ({ value, setValue, title, name }) => {
  return (
    <div className={style.container}>
      <input className={style.input} id={name} name={name} type="checkbox" checked={value} onChange={() => { setValue(!value) }} />
      <label className={style.label} htmlFor={name}>{title}</label>
    </div>
  )
}