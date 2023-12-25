export default function FormInput({ label, value, onChange }) {
  
  return(
    <div>
      <label htmlFor="">{label.toUpperCase()}</label>
      <input value={value} onChange={onChange} type="text" />
    </div>
  )
}