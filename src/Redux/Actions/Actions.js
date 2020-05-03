import { createAction } from 'redux-actions'

export const login = createAction('LOGIN')
export const changeFormType = createAction('CHANGE_FORM_TYPE')
export const registration = createAction('REGISTRATION')
export const getAddressList = createAction('GET_ADDRESS_LIST')
export const regToken = createAction('SET_REG_TOKEN')