import { useState, useEffect } from 'react'
import { Btn } from '../Atoms/Btn'

export const useInput = (initState, type='text') => {
  const [value, setValue] = useState(initState)

  const bind = {
    type,
    value,
    onChange: e => {setValue(e.target.value)}
  }
  return [value, bind]
}


export const FormLogin = () => {
  const [user, bindUser] = useInput('', 'text')
  const [password, bindPassword] = useInput('','password' )
  const [disable, setDisable] = useState(true)

  useEffect( () => {
    setDisable(user.length <= 6 && password.length <= 8)
  }, [user, password])


  const handleSubmit = async e => {
    e.preventDefault()

    const init = {
      method: 'POST',
      body: JSON.stringify({user, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const url = 'http://localhost:5000/User/LogIn'
    const data = await(await fetch(url,init)).json()
    console.log(data)

  }

  return(
    <form onSubmit={e  => {handleSubmit(e)}}>
      <input
        className='form'
        {...bindUser}
        placeholder='Email or user name'
      />
      <input
        className='form'
        {...bindPassword}
        placeholder='*********'
      />
      <Btn
        disable={disable}
        className="btn_light-blue mt-5 mb-20"
        type="submit" value="Log In"
      />
    </form>
  )
}
