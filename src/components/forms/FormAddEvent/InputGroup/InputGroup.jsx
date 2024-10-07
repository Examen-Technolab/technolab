import { useEffect, useState } from "react";
import FormInput from "../../FormInput/FormInput";

export const InputGroup = ({ name, setValue, value, disabled = false }) => {

  const [title, setTitle] = useState(value.title);
  const [body, setBody] = useState(value.body);

  useEffect(() => {
    setBody(value.body);
    setTitle(value.title)
  }, [value])

  useEffect(() => {
    setValue({ body, title })
  }, [body, title])

  return (
    <div>
      <FormInput
        disabled={disabled}
        name={name + 'title'}
        text="Заголовок"
        value={title}
        setValue={setTitle}
      />
      <FormInput
        disabled={disabled}
        name={name + 'body'}
        text="Тело"
        value={body}
        setValue={setBody}
      />
    </div>
  )
}