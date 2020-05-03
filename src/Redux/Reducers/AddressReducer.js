import actions from '../Actions'

const { 
  getAddressList
} = actions

const initialState = {
  addressList: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getAddressList.toString():
      return state = {
        ...state,
        addressList: action.payload
      }
    

    default:
      return state
  }
}