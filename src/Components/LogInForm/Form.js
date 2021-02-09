import { useReducer, useState } from "react"
import Form from "../Global/Forms/Form"
import { inputsElements, initState } from './DataInputs'

const reducer = (state, event) =>
  ({...state, [event.name]: event.value})


function LogiInForm(){ 

  const [ formLogin, setFormLogin ] = useReducer(reducer, initState)
  const [disable, setDisable] = useState(true)

  const handleChange = event => {
    const {name, value} = event.target
    setFormLogin({name, value})
  }



  return(
    <Form 
      dataInputs={inputsElements}
      value={formLogin}
      onChange={handleChange}
    >
      <input 
        disabled={disable} 
        className="btn btn_light-blue mt-5 mb-20" 
        type="submit" value="Log In"
      />
    </Form>
  )
}
export default LogiInForm
