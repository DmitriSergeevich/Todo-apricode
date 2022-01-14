import { useState } from "react";
import { InputTextItemProps } from "../../types";
import Button from "../Button/Button"
import "./InputTextItem.scss";

const InputTextItem = ({ handler }: InputTextItemProps) => {
  const [textItem, setTextItem] = useState<string>('');

  const onClick = () => {
    handler(textItem);
    setTextItem('');
  }

  return (
    <div className='row mg-vert-16'>
      <input type='text'
        className='text-input'
        value={textItem}
        placeholder='Что сделать?'
        onChange={(e) => setTextItem(e.target.value)}>
      </input>
      <Button
        lable={'Добавить'}
        handler={onClick}
        classes={'btn btn__blue'}
      />
    </div>
  )
}

export default InputTextItem;