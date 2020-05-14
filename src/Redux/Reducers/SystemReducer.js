import actions from '../Actions'

const {
  setUserData,
  regToken,
  setFormType,
  changeAuthStatus,
  authToken,
} = actions

const initialState = {
  isAuthForm: false,
  authStatus: false,
  regToken: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case setFormType.toString():
      return state = {
        ...state,
        isAuthForm: action.payload
      }

    case setUserData.toString():
      return state = {
        ...state,
        user: action.payload
      }

    case changeAuthStatus.toString():
      return state= {
        ...state,
        authStatus: action.payload
      }

    case regToken.toString():
      return state = {
        ...state,
        regToken: action.payload
      }

    case authToken.toString():
      return state = {
        ...state,
        authToken: action.payload
      }

    default:
      return state
  }
}