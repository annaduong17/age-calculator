import { createContext, useState } from "react";

const AgeContext = createContext();

function Provider({ children }) {
  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const ageObj = {day, month, year};

  const getAge = (obj) => {
    const today = new Date();
    obj.month -= 1;

    let age = {};
    let yearDiff = today.getFullYear() - obj.year;

    if (today.getMonth() < obj.month || (today.getMonth() === obj.month && today.getDate() < obj.day)) {
      yearDiff--;
    }

    age.years = yearDiff;
    age.months = today.getMonth() - obj.month + (today.getDate() < obj.day ? -1 : 0);
    console.log(age.months);

    if (age.months < 0) {
      age.months += 12;
    }

    age.days = today.getDate() - obj.day;

    if (age.days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, obj.day);
      const daysInLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).getDate();
      age.days += daysInLastMonth;
      age.months--; 
    }
    console.log(`this is age`, age);
    return age;
  }

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
    onSubmit: (e, ageObj) => {
      e.preventDefault();
      setFormSubmitted(true);
      getAge(ageObj);
    },
    ageObj,
  }

  return(
    <AgeContext.Provider value={value}>
      {children}
    </AgeContext.Provider>
  )
}

export { Provider };
export default AgeContext;