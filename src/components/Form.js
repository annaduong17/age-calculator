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
        <FormInput placeholder="DD" type="number" errorMessage={dayError} maxLength={2} isValid={dayIsValid} required label="DAY" value={day} onChange={handleDayChange} />
        <FormInput placeholder="MM" type="number" errorMessage={monthError} maxLength={2} isValid={monthIsValid} required label="MONTH" value={month} onChange={handleMonthChange} />
        <FormInput placeholder="YYYY" required type="number" errorMessage={yearError} label='YEAR' value={year} onChange={handleYearChange} isValid={yearIsValid} />
      </div>
      <div className='flex-row divider'>
        <hr />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
      </div>
    </form>
  )
}