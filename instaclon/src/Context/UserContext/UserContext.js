import { createContext , useReducer } from 'react'
import { initState , typeAction, reducer} from './reducer'
export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [account, dispatch] = useReducer(reducer, initState)
  return(
    <UserContext.Provider value={{account, dispatch, typeAction}}>
      {children}
    </UserContext.Provider>
  )
}
