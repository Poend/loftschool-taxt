import actions from '../Redux/Actions'

const {
  registration,
  login,
  changeFormType,
  setFormType,
  regToken
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
          console.log(data)
          store.dispatch(regToken(data.token))
        })
      next(action)
      break

    case login.toString():
      fetch('https://loft-taxi.glitch.me/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload
        })
      })
        .then(res => res.json()).then(data => data)
      next(action)
      break

    case changeFormType.toString():
      const curValue = store.getState().system.isAuthForm
      console.log(curValue)
      store.dispatch(setFormType(!curValue))
      next(action)
      break

    default:
      break;
  }
}