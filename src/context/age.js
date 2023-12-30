import { createContext, useState } from "react";

const AgeContext = createContext();

function Provider({ children }) {
  const [ formData, setFormData ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ age, setAge ] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
    if (name === 'day') {
      setAge({...age, days: new Date().getDate() - value});
    } else if (name === 'month') {
      setAge({...age, months: new Date().getMonth() + 1 - value});
    } else if (name === 'year') {
      setAge({...age, years: new Date().getFullYear() - value});
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (data.day > 31 || data.day < 1) {
      newErrors.day = 'Must be a valid day';
    }

    if (data.month > 12) {
      newErrors.month = 'Must be a valid month';
    }

    if (data.year > new Date().getFullYear()) {
      newErrors.year = 'Must be in the past';
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