import { useState } from 'react'

export const useUserLogIn = initState => {
  const [value, setValue] = useState(initState)
  const bindUser = {
    type: 'text',
    name: 'user',
    value: value.user,
    placeholder:'Email or user name',
    onChange: e => {setValue(oldState => ({...oldState, [e.target.name]: e.target.value}))}
  }
  const bindPassword = {
    type: 'password',
    name: 'password',
    value: value.password,
    placeholder:'*********',
    onChange: e => {setValue(oldState => ({...oldState, [e.target.name]: e.target.value}))}
  }
  return [value, bindUser, bindPassword]
}
