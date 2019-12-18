import { combineReducers } from 'redux'
import { currency, locale } from './reducers'

export default combineReducers({
  currency,
  locale
})
