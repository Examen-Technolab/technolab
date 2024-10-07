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
            return (
              <li
                key={key}
                className={cls.listItem}
                onClick={() => { changeValue(item) }}
              >
                <input hidden name={key} onChange={changeHandler} type="radio" checked={item === value} />
                <label htmlFor={key} className={cls.radioBtn} />
                <label htmlFor={key} className={cls.radioLabel}  >{item}</label>
              </li>
            )
          })
        }
      </ul>

    </div>
  )

}