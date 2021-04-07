import { useContext } from 'react'
import { UserContext } from '../Context/UserContext/UserContext'
import { Redirect } from 'react-router-dom'

export const RedirectLogIn = ({children}) => {
  console.log(document.cookie)
  const {account} = useContext(UserContext)
  return account.login ? children : <Redirect to='/'/>
}

export const RedirectHome = ({children}) => {
  const {account} = useContext(UserContext)
  return account.login ? <Redirect to='/Home'/> : children
}
