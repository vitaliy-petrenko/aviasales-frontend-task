import { Dispatch } from 'react'
import { fetchTickets as apiFetchTickets } from '../../api/ticketApi'
import ACTION_TYPES from '../actionTypes'
import { TActionFetchingStatus, TActionWithOnlyType, TAppAnyAction } from '../types'
import { ETicketsSortBy, ITicket, TActionAddTickets, TActionFilterTransfers, TActionSortBy } from './types'
import { orderedArray } from '../../helpers/misc'

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

export const clearFindTickets = (): TActionWithOnlyType => ({
  type: ACTION_TYPES.FIND_TICKETS.CLEAR
})

export const selectSortBy = (sortBy: ETicketsSortBy): TActionSortBy => ({
  type: ACTION_TYPES.FIND_TICKETS.SORT_BY,
  payload: sortBy,
})

export const setAvailableTransfersOptions = (options: number[]): TActionFilterTransfers => ({
  type: ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS,
  payload: options,
})

export const setSelectedTransfersOptions = (options: number[]): TActionFilterTransfers => ({
  type: ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS,
  payload: options
})

const getAvailableOptions = (tickets: ITicket[]): number[] => {
  let count = 0

  tickets.forEach(ticket => ticket.segments.forEach(({ stops }) => count = Math.max(count, stops.length)))

  return orderedArray(count + 1)
}

export const fetchTickets = () => (dispatch: Dispatch<TAppAnyAction>) => {
  dispatch(setFetchingErrorStatus(false))
  dispatch(setFetchingStatus(true))

  apiFetchTickets()
    .then(
      tickets => {
        dispatch(addTickets(tickets))
        dispatch(setAvailableTransfersOptions(getAvailableOptions(tickets)))
      })
    .catch(() => {
      dispatch(setFetchingErrorStatus(true))
    })
    .finally(() => {
      dispatch(setFetchingStatus(false))
    })
}
