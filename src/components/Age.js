import { useContext } from 'react';
import Display from './Display';
import AgeContext from '../context/age';

export default function Age() {
  const { age } = useContext(AgeContext);

  return(
    <div className='display-container'>
      <Display value={age.years} >years</Display>
      <Display value={age.months} >months</Display>
      <Display value={age.days} >days</Display>
    </div>
  )
}