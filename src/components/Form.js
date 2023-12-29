import { useContext } from 'react';
import FormInput from './FormInput';
import AgeContext from '../context/age';

export default function Form() {
  const { day, handleDayChange, month, handleMonthChange, year, handleYearChange, onSubmit, ageObj } = useContext(AgeContext);

  return(
    <form onSubmit={(e) => onSubmit(e, ageObj)}>
      <FormInput maxLength={2} required type="number" label="day" value={day} onChange={handleDayChange} />
      <FormInput maxLength={2} required type="number" label="month" value={month} onChange={handleMonthChange} />
      <FormInput maxLength={4} required type="number" label="year" value={year} onChange={handleYearChange} />
      <div>
        <hr />
        <button >Submit</button>
      </div>
    </form>
  )
}