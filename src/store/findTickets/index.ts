import { combineReducers } from 'redux'
import { pagination, sortBy, fetchingStatuses, tickets, transfers } from './reducers'


export default combineReducers({
  tickets,
  fetchingStatuses,
  sortBy,
  pagination,
  filters: combineReducers({ transfers }),
})
