import clsx from 'clsx';

export default function FormInput({ label, value, onChange, errorMessage, type, ...rest }) {

  const otherProps = rest;
  console.log(otherProps);
  const classes = clsx({
    "error": otherProps.isValid === false,
  });

  
  
  return(
    <div className={classes}>
      <label  htmlFor="">{label}</label>
      <input type={type} {...rest} value={value} onChange={onChange} />
      <p>{errorMessage}</p>
    </div>
  )
}