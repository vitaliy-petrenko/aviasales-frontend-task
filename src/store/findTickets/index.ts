import { combineReducers } from 'redux'
import { filters, sortBy, tickets } from './reducers'

export default combineReducers({
  sortBy,
  filters,
  tickets,
})
