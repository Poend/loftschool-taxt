export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'

const initialState = {
  authStatus: false,
  user: {
    login: 'test',
    password: 'test'
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return state = {
        ...state,
        authStatus: action.payload
      }
  
    default:
      return state
  }
}