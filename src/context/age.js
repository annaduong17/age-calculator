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

    age.year = yearDiff;
    age.month = today.getMonth() - obj.month + (today.getDate() < obj.day ? -1 : 0);
    console.log(age.month);

    if (age.month < 0) {
      age.month += 12;
    }

    age.day = today.getDate() - obj.day;

    if (age.day < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, obj.day);
      const dayInLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).getDate();
      age.day += dayInLastMonth;
      age.month--; 
    }
    console.log(`this is age`, age);
    return age;
  }

  const value = {
    day,
    handledayChange: (e) => {
      setDay(e.target.value);
    },
    month,
    handlemonthChange: (e) => {
      setMonth(e.target.value);
    },
    year, 
    handleyearChange: (e) => {
      setYear(e.target.value);
    }, 
    formSubmitted,
    onSubmit: (e, ageObj) => {
      e.preventDefault();
      setFormSubmitted(true);
      getAge(ageObj);
    },
    ageObj,
    getAge
  }

  return(
    <AgeContext.Provider value={value}>
      {children}
    </AgeContext.Provider>
  )
}

export { Provider };
export default AgeContext;