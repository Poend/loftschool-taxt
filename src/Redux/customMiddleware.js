import actions from '../Redux/Actions'

const {
  registration,
  login,
  changeFormType,
  setFormType,
  regToken,
  authToken,
  changeAuthStatus,
  getAddressList,
  setAddressList,
  getRoute,
  route,
  setCardData,
  getCardData,
  cardData,
  logout,
  resetState
} = actions

export const middleware = store => next => action => {
  switch (action.type) {

    case registration.toString():
      fetch('https://loft-taxi.glitch.me/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload
        })
      })
        .then(res => res.json()).then(data => {
          store.dispatch(regToken(data.token))
        })
      break

    case login.toString():
      fetch('https://loft-taxi.glitch.me/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload
        })
      })
        .then(res => res.json()).then(data => {
          if(data.success){
            const authStatus = store.getState().system.authStatus
            store.dispatch(authToken(data.token))
            store.dispatch(changeAuthStatus(!authStatus))
          }
        })
      break

    case getAddressList.toString():
      fetch('https://loft-taxi.glitch.me/addressList', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json()).then(data => {
          store.dispatch(setAddressList(data.addresses))
        })
      break
    
    case getRoute.toString():
      fetch(`https://loft-taxi.glitch.me/route?address1=${action.payload.address1}&address2=${action.payload.address2}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json()).then(data => {
          store.dispatch(route(data))
        })
      break

    case setCardData.toString():
      fetch('https://loft-taxi.glitch.me/card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload
        })
      })
      break
    
    case getCardData.toString():
      const token = store.getState().system.authToken
      fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json()).then(data => {
          store.dispatch(cardData(data))
        })
      break

    case logout.toString():
      store.dispatch(resetState())
      break

    case changeFormType.toString():
      const curValue = store.getState().system.isAuthForm
      store.dispatch(setFormType(!curValue))
      break

    default:
      break;
  }
  next(action)
}