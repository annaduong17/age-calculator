import { createContext, useState } from "react";

const AgeContext = createContext();

function Provider({ children }) {
  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');
  const [ dayIsValid, setDayIsValid ] = useState(true);
  const [ monthIsValid, setMonthIsValid ] = useState(true);
  const [ yearIsValid, setYearIsValid ] = useState(true);
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ age, setAge ] = useState({});

  const today = new Date();
  
  const handleDayChange = (e) => {
    const value = e.target.value;
    setDay(value);
    

    if (value > 31 || value < 1 ) {
      setDayIsValid(false);
    } else {
      setDayIsValid(true);
      setAge({...age, days: today.getDate() - value});
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    setMonth(value);
    
    if (value > 12) {
      setMonthIsValid(false);
    } else {
      setMonthIsValid(true);
      setAge({...age, months: today.getMonth() + 1 - value});
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);

    if (value > new Date().getFullYear()) {
      setYearIsValid(false);
    } else {
      setYearIsValid(true);
      setAge({...age, years: today.getFullYear() - value});
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (dayIsValid && monthIsValid && yearIsValid) {
      setFormSubmitted(true);
    } 
  }

  const value = {
    day,
    handleDayChange,
    month,
    handleMonthChange,
    year, 
    handleYearChange, 
    formSubmitted,
    onSubmit,
    age,
    dayIsValid,
    monthIsValid,
    yearIsValid,
  }

  return(
    <AgeContext.Provider value={value}>
      {children}
    </AgeContext.Provider>
  )
}

export { Provider };
export default AgeContext;