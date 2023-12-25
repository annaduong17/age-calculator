import { useContext } from 'react';
import FormInput from './FormInput';
import AgeContext from '../context/age';

export default function Form() {
  const { day, handleDayChange, month, handleMonthChange, year, handleYearChange, onSubmit } = useContext(AgeContext);

  return(
    <div>
      <FormInput label="day" value={day} onChange={handleDayChange} />
      <FormInput label="month" value={month} onChange={handleMonthChange} />
      <FormInput label="year" value={year} onChange={handleYearChange} />
      <div>
        <hr />
        <button onSubmit={onSubmit}>Submit</button>
      </div>
    </div>
  )
}