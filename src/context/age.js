import { createContext, useState } from "react";

const AgeContext = createContext();

function Provider({ children }) {
  const [ days, setDays ] = useState('');
  const [ months, setMonths ] = useState('');
  const [ years, setYears ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const ageObj = {days, months, years};

  const getAge = (obj) => {
    const today = new Date();
    obj.month -= 1;

    let age = {};
    let yearDiff = today.getFullYear() - obj.years;

    if (today.getMonth() < obj.months || (today.getMonth() === obj.months && today.getDate() < obj.days)) {
      yearDiff--;
    }

    age.years = yearDiff;
    age.months = today.getMonth() - obj.months + (today.getDate() < obj.days ? -1 : 0);
    console.log(age.months);

    if (age.months < 0) {
      age.months += 12;
    }

    age.days = today.getDate() - obj.days;

    if (age.days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, obj.days);
      const daysInLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).getDate();
      age.days += daysInLastMonth;
      age.months--; 
    }
    console.log(`this is age`, age);
    return age;
  }

  const value = {
    days,
    handleDaysChange: (e) => {
      setDays(e.target.value);
    },
    months,
    handleMonthsChange: (e) => {
      setMonths(e.target.value);
    },
    years, 
    handleYearsChange: (e) => {
      setYears(e.target.value);
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