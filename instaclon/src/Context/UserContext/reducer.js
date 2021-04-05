export const initState = {
  user: '',
  isLoading: false,
  login: false,
  token: ''
}

export const typeAction = {
  loading: 'LOADING',
  loginSuccess: 'LOGIN_SUCCESS',
  loginFail: 'LOGIN_FAIL'
}

export const reducer = (state, action) => {
  switch(action.type) {
    case typeAction.loading:
      return {...state, isLoading: true}
    case typeAction.loginSuccess:
      return {
        ...state,
        isLoading: false,
        user: action.user,
        token: action.token,
        login: true
      }
    case typeAction.loginFail:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

