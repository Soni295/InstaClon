export const init = {
  user: '',
  isLoading: false,
  login: false,
  token: ''
}

export const initState = JSON.parse(localStorage.getItem('user')) || init
export const typeAction = {
  loading: 'LOADING',
  loginSuccess: 'LOGIN_SUCCESS',
  loginFail: 'LOGIN_FAIL'
}

export const reducer = (state, action) => {
  let newState
  switch(action.type) {
    case typeAction.loading:
      newState = {...state, isLoading: true}
      break
    case typeAction.loginSuccess:
      newState = {
        ...state,
        isLoading: false,
        user: action.user,
        token: action.token,
        login: true
      }
      break
    case typeAction.loginFail:
      newState = { ...state, isLoading: false }
      break
    default:
      newState = { ...state }
  }

  localStorage.setItem('user', JSON.stringify(newState))
  return newState
}

