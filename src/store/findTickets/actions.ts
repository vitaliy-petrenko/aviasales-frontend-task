import { fetchTickets as apiFetchTickets } from '../../api/ticketApi'
import ACTION_TYPES from '../actionTypes'
import { TActionFetchingStatus, TActionWithOnlyType, TAppAnyAction } from '../types'
import {
  ETicketsSortBy,
  ITicket,
  TActionAddTickets,
  TActionFilterTransfers,
  TActionFilterTransfersSetMaxTransfersCount,
  TActionSortBy
} from './types'
import { Dispatch } from 'react'

const setFetchingStatus = (status: boolean): TActionFetchingStatus => ({
  type: ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING,
  payload: status,
})

const setFetchingErrorStatus = (status: boolean): TActionFetchingStatus => ({
  type: ACTION_TYPES.FIND_TICKETS.STATUSES.IS_ERROR,
  payload: status,
})

const addTickets = (tickets: ITicket[]): TActionAddTickets => ({
  type: ACTION_TYPES.FIND_TICKETS.TICKETS.ADD,
  payload: tickets,
})

export const clearTickets = (): TActionWithOnlyType => ({
  type: ACTION_TYPES.FIND_TICKETS.TICKETS.CLEAR
})

export const selectSortBy = (sortBy: ETicketsSortBy): TActionSortBy => ({
  type: ACTION_TYPES.FIND_TICKETS.SORT_BY,
  payload: sortBy,
})

const setMaxTransfersCount = (count: number): TActionFilterTransfersSetMaxTransfersCount => ({
  type: ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_MAX_TRANSFERS_COUNT,
  payload: count,
})

const getMaxTransfersCount = (tickets: ITicket[]): number => {
  let count = 0

  const x = performance.now()
  tickets.forEach(ticket => ticket.segments.forEach(({ stops }) => count = Math.max(count, stops.length)))
  console.log(performance.now() - x)

  return count
}

export const fetchTickets = () => (dispatch: Dispatch<TAppAnyAction>) => {
  dispatch(setFetchingErrorStatus(false))
  dispatch(setFetchingStatus(true))

  apiFetchTickets()
    .then(tickets => {
      dispatch(addTickets(tickets))
      dispatch(setMaxTransfersCount(getMaxTransfersCount(tickets)))
    })
    .catch(() => {
      dispatch(setFetchingErrorStatus(true))
    })
    .finally(() => {
      dispatch(setFetchingStatus(false))
    })
}

export const toggleTransfersOption = (count: number): TActionFilterTransfers => ({
  type: ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_OPTION,
  payload: count
})
