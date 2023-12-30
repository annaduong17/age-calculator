import { createContext, useState } from "react";

const AgeContext = createContext();

function Provider({ children }) {
  const [ formData, setFormData ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ age, setAge ] = useState({});

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    console.log(birthDate);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - (birthDate.getDate() + 1);

    if (days < 0) {
      const daysInLastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();

      days += daysInLastMonth;
      months--;

      if (months < 0) {
        years--;
        months += 12;
      }
    } 

    return { years, months, days };
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData(prevFormData => {
      const updatedFormData = { ...prevFormData, [name]: value };
      const { year, month, day } = updatedFormData;
      console.log(year);
  
      const birthdate = `${year}-${month}-${day}`;
      const calcAge = calculateAge(birthdate);
  
      setAge({...age, ...calcAge});
      setFormSubmitted(false);
  
      return updatedFormData;
    });
  };
  
  const validateForm = (data) => {
    const newErrors = {};

    if (data.day > 31 || data.day < 1) {
      newErrors.day = 'Must be a valid day';
    } else if (data.day.length < 2) {
      newErrors.day = 'Must contain 2 digits';
    }else {
      const lastDayOfMonth = new Date(data.year, data.month, 0).getDate();
      if (data.day > lastDayOfMonth) {
        newErrors.day = `Must be ${lastDayOfMonth} or lower`;
      }
    }

    if (data.month > 12) {
      newErrors.month = 'Must be a valid month';
    } else if (data.month.length < 2) {
      newErrors.month = 'Must contain 2 digits';
    }

    if (data.year > new Date().getFullYear()) {
      newErrors.year = 'Must be in the past';
    } else if (data.year.length < 4) {
      newErrors.year = 'Must contain 4 digits';
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormSubmitted(true);
    } 
  }

  const value = {
    formData,
    handleInputChange,
    formSubmitted,
    handleSubmit,
    errors,
    age,
  }

  return(
    <AgeContext.Provider value={value}>
      {children}
    </AgeContext.Provider>
  )
}

export { Provider };
export default AgeContext;