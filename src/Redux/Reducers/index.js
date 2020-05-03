import { combineReducers } from 'redux'
import { reducer as SystemReducer } from './SystemReducer'
import { reducer as AddressReducer } from './AddressReducer'

export default combineReducers({
  system: SystemReducer,
  componentsData: AddressReducer
})