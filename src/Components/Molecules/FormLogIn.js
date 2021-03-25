import { useState, useEffect } from 'react'
import { useUserLogIn } from '../../Hooks/useUserLogIn'
import { Btn } from '../Atoms/Btn'
import { URL } from '../../Hooks/url'

export const FormLogin = () => {
  const [user, bindUser, bindPassword] = useUserLogIn({
    user: '',
    password: ''
  })
  const [disable, setDisable] = useState(true)

  useEffect( () => {
    setDisable((user.user.length <= 6 || user.password.length <= 8))
  }, [user])

  const UseLogIn = async (event) => {
    event.preventDefault()
    const init = {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const link = URL + 'User/LogIn'
    const data = await(await fetch(link, init)).json()
    if(data.msg === 'success')console.log(data.user)
    else alert("This count doesn't exist")
}

  return(
    <form onSubmit={e  => {UseLogIn(e)}}>
      <input
        className='form'
        {... bindUser}
      />
      <input
        className='form'
        {...bindPassword}
      />
      <Btn
        disable={disable}
        className="btn_light-blue mt-5 mb-20"
        type="submit" value="Log In"
      />
    </form>
  )
}
