import { createContext, useState } from "react";

const AgeContext = createContext();

function Provider({ children }) {
  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const value = {
    day,
    handleDayChange: (e) => {
      setDay(e.target.value);
    },
    month,
    handleMonthChange: (e) => {
      setMonth(e.target.value);
    },
    year, 
    handleYearChange: (e) => {
      setYear(e.target.value);
    }, 
    formSubmitted,
    onSubmit: (e) => {
      e.preventDefault();
      setFormSubmitted(true);
    }
  }

  return(
    <AgeContext.Provider value={value}>
      {children}
    </AgeContext.Provider>
  )
}

export { Provider };
export default AgeContext;