import { createAction } from 'redux-actions'

export const login = createAction('LOGIN')
export const registration = createAction('REGISTRATION')
export const changeFormType = createAction('CHANGE_FORM_TYPE')

export const changeAuthStatus = createAction('CHANGE_AUTH_STATUS')
export const setFormType = createAction('SET_FORM_TYPE')
export const setUserData = createAction('SET_USER_DATA')
export const getAddressList = createAction('GET_ADDRESS_LIST')
export const regToken = createAction('SET_REG_TOKEN')