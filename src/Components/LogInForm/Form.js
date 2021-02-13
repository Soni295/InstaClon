import { useReducer, useState, useEffect } from "react"
import { Form } from "../Global/Forms/Form"
import { inputsElements, initState } from './DataInputs'
import { handleChange, reducer } from './Reducer'


export const LogiInForm = () => { 
  const [ formLogin, setFormLogin ] = useReducer(reducer, initState)
  const [ disable, setDisable ] = useState(true)

  useEffect( () => {
    if(formLogin.user.length >= 8 && formLogin.password.length >= 8) {
      setDisable(false)
    }
    else{
      setDisable(true)
    }
  }, [formLogin])

  return(
    <Form 
      dataInputs={inputsElements}
      value={formLogin}
      onChange={e => handleChange(e, setFormLogin)}
    >
      <input 
        disabled={disable} 
        className="btn btn_light-blue mt-5 mb-20" 
        type="submit" value="Log In"
      />
    </Form>
  )
}
