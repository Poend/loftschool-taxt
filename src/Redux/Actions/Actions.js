import * as Types from '../Reducer'

export const setAuthStatus = payload => {
  return {
    type: Types.SET_AUTH_STATUS,
    payload
  }
}