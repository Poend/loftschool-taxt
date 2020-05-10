import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import { middleware } from './customMiddleware'

const getInitialState = () => {
  try {
    const serialisedState = localStorage.getItem('state')
    if (!serialisedState) {
      return undefined
    }
    return JSON.parse(serialisedState)
  } catch (err) {
    return undefined
  }
}


const initialState = getInitialState()

export const Store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(middleware)
)