import { combineReducers } from 'redux'
import { reducer as SystemReducer } from './SystemReducer'
import { reducer as ComponentsDataReducer } from './ComponentsDataReducer'
import actions from '../Actions'

const { resetState } = actions

const reducer = (state, action) => {
  switch (action.type) {
    case resetState.toString():
      return state = undefined

    default:
      return appReducer(state, action)
  }
}

const appReducer = combineReducers({
  system: SystemReducer,
  componentsData: ComponentsDataReducer
})

export default reducer