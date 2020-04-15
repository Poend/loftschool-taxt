import { bindActionCreators } from 'redux'
import { store } from '../Store'
import * as actions from './Actions'

export default bindActionCreators({ ...actions }, store.dispatch)