import { useState, useEffect } from 'react'
import { useUserLogIn } from '../../Hooks/useUserLogIn'
import { Btn } from '../Atoms/Btn'
import { usePost } from '../../Hooks/useFetch'

export const FormLogin = () => {

  const [disable, setDisable] = useState(true)
  const [user, bindUser, bindPassword] = useUserLogIn({
    user: '',
    password: ''
  })

  useEffect( () => {
    setDisable((user.user.length <= 6 || user.password.length <= 8))
  }, [user])

  const UseLogIn = async (event) => {
    event.preventDefault()
    const data = usePost('User/LogIn', user)
    if(data.msg === 'success') console.log(data)
    else alert("This count doesn't exist")
}

  return(
    <form onSubmit={UseLogIn}>
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
