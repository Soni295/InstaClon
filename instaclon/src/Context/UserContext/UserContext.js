import { createContext , useReducer } from 'react'
import { initState , typeAction,  reducer } from './reducer'
export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [account, dispatch] = useReducer(reducer, initState)

  const UseSetUser = () => {
    return {
      loadingUserLogin: () =>
        dispatch({type: typeAction.loading}),
      loginSuccess: ({user, token}) =>
        dispatch({type: typeAction.loginSuccess, user, token}),
      errorLogin : () =>
        dispatch({type: typeAction.loginFail})
    }
  }

  return(
    <UserContext.Provider value={{account, UseSetUser}}>
      {children}
    </UserContext.Provider>
  )
}
