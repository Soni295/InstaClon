import Input from "./Input"

const Form = ({children, ...rest}) => {

  const { dataInputs, value, onChange } = rest

  return(
    <form>
      {
        dataInputs.map((input, index) =>
          <Input
            key={index + input.name}
            type={input.type}
            name={input.name}
            value={value[input.name]}
            onChange={onChange}
            placeholder={input.placeholder}
          />
        )
      } 
      {children}
    </form>
  )
}

export default Form
