import { call, cancel, fork, put, take } from 'redux-saga/effects'
import { clearFindTickets, fetchTicketsRequest, } from './actions'
import { fetchTickets, fetchTicketsSearchId } from '../../api/ticketApi'
import { getAvailableTransfers } from './helpers'
import { arraysAreSame, joinArrays, uniqArrayItems } from '../../helpers/misc'
import { statuses, tickets, transfers } from './reducers'

export function* pollTickets() {
  yield put(statuses.actions.setFetching(true))

  const searchId = yield call(fetchTicketsSearchId)

  if (!searchId) {
    return yield put(statuses.actions.setError(true))
  }

  let
    stop = false,
    availableTransfers: number[] = []

  while (!stop) {
    const data = yield call(fetchTickets, searchId)

    if (!data) continue

    const
      { tickets: ticketsSegment } = data,
      newAvailableTransfers = getAvailableTransfers(ticketsSegment)

    stop = data.stop

    if (!arraysAreSame(availableTransfers, newAvailableTransfers)) {
      availableTransfers = uniqArrayItems(joinArrays(availableTransfers, newAvailableTransfers)).sort()

      yield put(transfers.actions.setAvailable(availableTransfers))
    }

    yield put(tickets.actions.add(ticketsSegment))
  }

  yield put(statuses.actions.setFetching(false))
}

export function* getTickets() {
  while (true) {
    yield take(fetchTicketsRequest.type)
    const poll = yield fork(pollTickets)

    yield take(clearFindTickets)
    yield cancel(poll)
  }
}

