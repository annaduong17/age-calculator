import { useContext } from 'react';
import AgeContext from '../context/age';
import Display from './Display';

export default function Age() {
  const { day, month, year, formSubmitted } = useContext(AgeContext);
  
  

  return(
    <div>
      <Display>years</Display>
      <Display>months</Display>
      <Display>days</Display>
    </div>
  )
}