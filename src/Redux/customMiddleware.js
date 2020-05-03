import actions from '../Redux/Actions'

const {
  registration,
  login,
  changeFormType,
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
      console.log('asdasd')
      const curValue = store.getState().system.isAuthForm
      store.dispatch(changeFormType(!curValue))
      next(action)
      break

    default:
      break;
  }
}