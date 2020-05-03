import actions from '../Actions'

const {
  changeFormType,
  login,
  regToken
} = actions

const initialState = {
  isAuthForm: false,
  authStatus: false,
  regToken: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case changeFormType.toString():
      console.log(action.payload)
      return state = {
        ...state,
        isAuthForm: action.payload
      }
    case login.toString():
      return state = {
        ...state,
        authStatus: action.payload
      }

    case regToken.toString():
      console.log(action.payload)
      return state = {
        ...state,
        regToken: action.payload
      }

    default:
      return state
  }
}