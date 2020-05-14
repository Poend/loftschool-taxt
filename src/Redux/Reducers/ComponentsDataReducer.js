import actions from '../Actions'

const {
  setAddressList,
  route,
  cardData
} = actions

const initialState = {
  addressList: [],
  route: [],
  cardData: {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setAddressList.toString():
      return state = {
        ...state,
        addressList: action.payload
      }

    case route.toString():
      return state = {
        ...state,
        route: action.payload
      }

    case cardData.toString():
      return state = {
        ...state,
        cardData: action.payload
      }


    default:
      return state
  }
}