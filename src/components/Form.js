import { useContext } from 'react';
import FormInput from './FormInput';
import AgeContext from '../context/age';

export default function Form() {
  const { day, handleDayChange, month, handleMonthChange, year, handleYearChange, onSubmit, dayIsValid, monthIsValid, yearIsValid } = useContext(AgeContext);

  let dayError;
  let monthError;
  let yearError;

  if (!dayIsValid) {
    dayError = 'Must be a valid day';
  } 

  if (!monthIsValid) {
    monthError = 'Must be a valid month';
  }

  if (!yearIsValid) {
    yearError = 'Must be in the past';
  }

  return(
    <form onSubmit={onSubmit}>
      <div className='flex-row'>
        <FormInput type="number" errorMessage={dayError} maxLength={2} isValid={dayIsValid} required label="DAY" value={day} onChange={handleDayChange} />
        <FormInput type="number" errorMessage={monthError} maxLength={2} isValid={monthIsValid} required label="MONTH" value={month} onChange={handleMonthChange} />
        <FormInput required type="number" errorMessage={yearError} label='YEAR' value={year} onChange={handleYearChange} />
      </div>
      <div className='flex-row'>
        <hr />
        <button >Submit</button>
      </div>
    </form>
  )
}