import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import { middleware } from './customMiddleware'

const initialState = () => {
  try {
    const serialisedState = localStorage.getItem('state')
    if (!serialisedState) {
      return undefined
    }
    return JSON.parse(localStorage)
  } catch (err) {
    return undefined
  }
}

export const Store = createStore(
  rootReducer,
  initialState(),
  applyMiddleware(middleware)
)