import { call, cancel, fork, put, take } from 'redux-saga/effects'
import { clearFindTickets, fetchTicketsRequest, } from './actions'
import { fetchTickets, fetchTicketsSearchId } from '../../api/ticketApi'
import { getAvailableTransfers } from './helpers'
import { arraysAreSame, joinArrays, uniqArrayItems } from '../../helpers/misc'
import { statuses, tickets, transfers } from './reducers'

const
  ADD_TICKETS_THROTTLE_TIME = 600,
  getTimestamp = (): number => +new Date()

export function* pollTickets() {
  yield put(statuses.actions.setFetching(true))

  const searchId = yield call(fetchTicketsSearchId)

  if (!searchId) {
    return yield put(statuses.actions.setError(true))
  }

  let
    stop = false,
    availableTransfers: number[] = [],
    ticketsBuffer: ITicket[] = [],
    lastTimeTicketsHaveBeenAdded: number = 0

  while (!stop) {
    const data = yield call(fetchTickets, searchId)

    if (!data) continue

    const newAvailableTransfers = getAvailableTransfers(data.tickets)

    ticketsBuffer.push(...data.tickets)
    stop = data.stop

    if (!arraysAreSame(availableTransfers, newAvailableTransfers)) {
      availableTransfers = uniqArrayItems(joinArrays(availableTransfers, newAvailableTransfers)).sort()

      yield put(transfers.actions.setAvailable(availableTransfers))
    }

    if (
      !lastTimeTicketsHaveBeenAdded ||
      getTimestamp() - lastTimeTicketsHaveBeenAdded > ADD_TICKETS_THROTTLE_TIME ||
      stop
    ) {
      yield put(tickets.actions.add(ticketsBuffer))
      ticketsBuffer = []
      lastTimeTicketsHaveBeenAdded = getTimestamp()
    }
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

