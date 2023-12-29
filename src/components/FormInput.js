export default function FormInput({ label, value, onChange, ...rest }) {
  
  return(
    <div>
      <label htmlFor="">{label.toUpperCase()}</label>
      <input {...rest} value={value} onChange={onChange} type="text" />
    </div>
  )
}