import { combineReducers } from 'redux'
import common from './common'
import findTickets from './findTickets'
import { ICommonState } from './common/types'
import { IFindTicketsState } from './findTickets/types'

export interface IState {
  common: ICommonState,
  findTickets: IFindTicketsState
}

export default combineReducers({
  common,
  findTickets
})
