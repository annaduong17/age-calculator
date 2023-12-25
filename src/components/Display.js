import { useContext } from 'react';
import AgeContext from '../context/age';

export default function Display({ children }) {
const { value, formSubmitted } = useContext(AgeContext);
  
  return(
    <div>
      <p>test</p>
      <p>{formSubmitted ? value : "- -" }</p>
      <p>{children}</p>
    </div>
  )
}