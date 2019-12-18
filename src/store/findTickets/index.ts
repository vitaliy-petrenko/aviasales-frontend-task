import { combineReducers } from 'redux'
import { pagination, sortBy, statuses, tickets, transfers } from './reducers'

export default combineReducers({
  tickets: tickets.reducer,
  statuses: statuses.reducer,
  sortBy: sortBy.reducer,
  pagination: pagination.reducer,
  filters: combineReducers({
    transfers: transfers.reducer
  }),
})
