import { useContext } from 'react';
import AgeContext from '../context/age';

export default function Display({ value, children }) {
const { formSubmitted } = useContext(AgeContext);
  
  return(
    <div className='flex-row age'>
      <p className='num'>{formSubmitted ? value : "- -" }</p>
      <p>{children}</p>
    </div>
  )
}