import { useContext } from 'react';
import FormInput from './FormInput';
import AgeContext from '../context/age';

export default function Form() {
  const { formData, handleInputChange, handleSubmit } = useContext(AgeContext);


  return(
    <form onSubmit={handleSubmit}>
      <div id='inputs-container' className='flex-row'>
        <FormInput name="day" placeholder="DD" type="number" required label="DAY" value={formData.day} onChange={handleInputChange} />
        <FormInput name="month" placeholder="MM" type="number" required label="MONTH" value={formData.month} onChange={handleInputChange} />
        <FormInput name="year" placeholder="YYYY" required type="number" label='YEAR' value={formData.year} onChange={handleInputChange} />
      </div>
      <div id='line-btn-container' className='flex-row divider'>
        <hr />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
      </div>
    </form>
  )
}