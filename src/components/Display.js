import { useContext } from 'react';
import AgeContext from '../context/age';

export default function Display({ value, children }) {
const { formSubmitted } = useContext(AgeContext);
  
  return(
    <div>
      <p>{formSubmitted ? value : "- -" }</p>
      <p>{children}</p>
    </div>
  )
}