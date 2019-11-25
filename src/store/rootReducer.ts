import { combineReducers } from 'redux'
import common from './common'
import findTickets from './findTickets'

export interface IState {
  common: ICommonState,
  findTickets: IFindTicketsState
}

export default combineReducers({
  common,
  findTickets
})
