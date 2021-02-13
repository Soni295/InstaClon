export const Input = ({name, type='text', value, onChange, placeholder}) => {

  return(
    <input 
      className="form"      
      type={type}
      name={name}
      value={value}
      onChange={ e => onChange(e)}
      placeholder={placeholder}
    />
  )
}
export default Input
