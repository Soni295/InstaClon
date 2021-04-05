import { useState, useEffect } from 'react'
import { useUserLogIn } from '../../Hooks/useUserLogIn'
import { Btn } from '../Atoms/Btn'
import { usePost } from '../../Hooks/useFetch'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext/UserContext'

export const FormLogin = () => {

  const [disableBtn, setDisableBtn] = useState(true)
  const { dispatch, typeAction } = useContext(UserContext)

  const [user, bindUser, bindPassword] = useUserLogIn({
    user: '',
    password: ''
  })

  useEffect(() => {
    setDisableBtn((user.user.length <= 6 || user.password.length <= 7))
  }, [user])

  const UseLogIn = async (event) => {
    event.preventDefault()
    dispatch({type: typeAction.loading})

    const data = await usePost('User/LogIn', user)

    if(data.msg === 'success') {
      dispatch({type: typeAction.loginSuccess, user: data.user, token: data.token})
    }
    else {
      dispatch({type: typeAction.loginFail, user: data.user, token: data.token})
    }

  }
  console.log('I\'m in modules formlogin user: example1@hotmail.com pass: example1')
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
        disable={disableBtn}
        className="btn_light-blue mt-5 mb-20"
        type="submit" value="Log In"
      />
    </form>
  )
}
