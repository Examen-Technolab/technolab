import { useEffect } from 'react';
import cls from './FormRadio.module.css'

export const FormRadio = ({
  values,
  label,
  required = false,
  changeValue,
  value,
  name
}) => {

  const changeHandler = (e) => {
    changeValue(e.target.value);
  }

  useEffect(() => {
    if (required) {
      changeValue(values[0])
    }
  }, [])

  return (
    <div className={cls.radioGroup}>
      {
        !!label && (
          <label className={cls.label}>{label}</label>
        )
      }
      <ul className={cls.list}>
        {
          values.map((item, index) => {
            const key = name + index;
            const val = item.value ?? item;
            const title = item.title ?? item;
            return (
              <li
                key={key}
                className={cls.listItem}
                onClick={() => { changeValue(val) }}
              >
                <input hidden name={key} onChange={changeHandler} type="radio" checked={val === value} />
                <label htmlFor={key} className={cls.radioBtn} />
                <label htmlFor={key} className={cls.radioLabel}  >{title}</label>
              </li>
            )
          })
        }
      </ul>

    </div>
  )

}