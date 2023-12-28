import { useContext } from 'react';
import Display from './Display';
import AgeContext from '../context/age';

export default function Age() {
  const { getAge, ageObj } = useContext(AgeContext);
  const age = getAge(ageObj);

  return(
    <div>
      <Display value={age.years} >years</Display>
      <Display value={age.months} >months</Display>
      <Display value={age.days} >days</Display>
    </div>
  )
}