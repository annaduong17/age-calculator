import { useContext } from 'react';
import FormInput from './FormInput';
import AgeContext from '../context/age';

export default function Form() {
  const { days, handleDaysChange, months, handleMonthsChange, years, handleYearsChange, onSubmit, ageObj } = useContext(AgeContext);

  return(
    <form onSubmit={(e) => onSubmit(e, ageObj)}>
      <FormInput label="day" value={days} onChange={handleDaysChange} />
      <FormInput label="month" value={months} onChange={handleMonthsChange} />
      <FormInput label="year" value={years} onChange={handleYearsChange} />
      <div>
        <hr />
        <button >Submit</button>
      </div>
    </form>
  )
}