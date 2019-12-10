import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import common from './common'
import findTickets from './findTickets'
import { getTickets } from './findTickets/sagas'

export interface IState {
  common: ICommonState,
  findTickets: IFindTicketsState
}

export const rootReducer = combineReducers({
  common,
  findTickets
})

export function* rootSaga() {
  yield fork(getTickets)
}
