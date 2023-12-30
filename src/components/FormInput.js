import { useContext, useRef } from 'react';
import AgeContext from '../context/age';

export default function FormInput({ name, label, value, onChange, type, ...rest }) {
  const { errors } = useContext(AgeContext);
  const inputRef = useRef(null);

  if (errors[name] && inputRef.current) {
    inputRef.current.className = "error";
  } else if (inputRef.current) {
    inputRef.current.className = "flex-col";
  }
  
  return(
    <div ref={inputRef} className="flex-col">
      <label htmlFor="">{label}</label>
      <input name={name} type={type} {...rest} value={value} onChange={onChange} />
      {errors[name] && <p>{errors[name]}</p>}
    </div>
  )
}