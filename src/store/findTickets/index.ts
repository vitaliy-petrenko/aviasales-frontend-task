import { combineReducers } from 'redux'
import { pagination, sortBy, statuses, tickets, transfers } from './reducers'


export default combineReducers({
  tickets,
  statuses,
  sortBy,
  pagination,
  filters: combineReducers({ transfers }),
})
