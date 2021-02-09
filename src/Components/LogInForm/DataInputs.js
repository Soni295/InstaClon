import { InputElement, doInit } from "../Global/Forms/ClassInputElement"


// element for form
const user = new InputElement('user', 'text')
const password = new InputElement('password', 'password')

user.placeholder = 'Phone number, username or email'
password.placeholder = '***********'

export const inputsElements = [user, password]
export const initState = doInit(inputsElements)
