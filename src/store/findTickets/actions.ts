import { Dispatch } from 'react'
import { createAction } from '@reduxjs/toolkit'
import { pollTickets } from '../../api/ticketApi'
import ACTION_TYPES from '../actionTypes'
import { orderedArray } from '../../helpers/misc'

export const setFetchingLoadingStatus = createAction(
  ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING,
  (status: boolean) => ({
    payload: status,
  })
)

export const setFetchingLoadingAllStatus = createAction(
  ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING_ALL,
  (status: boolean) => ({
    payload: status,
  })
)

export const setFetchingErrorStatus = createAction(
  ACTION_TYPES.FIND_TICKETS.STATUSES.IS_ERROR,
  (status: boolean) => ({
    payload: status,
  })
)

export const addTickets = createAction(
  ACTION_TYPES.FIND_TICKETS.TICKETS.ADD,
  (tickets: ITicket[]) => ({
    payload: tickets,
  })
)

export const clearFindTickets = createAction(ACTION_TYPES.FIND_TICKETS.CLEAR)

export const selectSortBy = createAction(
  ACTION_TYPES.FIND_TICKETS.SORT_BY,
  (sortBy: TTicketsSortBy) => ({
    payload: sortBy,
  })
)

export const setAvailableTransfersOptions = createAction(
  ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS,
  (options: number[]) => ({
    payload: options,
  })
)

export const setSelectedTransfersOptions = createAction(
  ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS,
  (options: number[]) => ({
    payload: options
  })
)

const getMaxTransfersCount = (tickets: ITicket[]): number => {
  let count = 0

  tickets.forEach(ticket => ticket.segments.forEach(({ stops }) => count = Math.max(count, stops.length)))

  return count
}

export const fetchTickets = () => (dispatch: Dispatch<TAppAnyAction>) => {
  let
    maxTransfersCount = 0,
    firstSegmentPolled = false

  dispatch(setFetchingErrorStatus(false))
  dispatch(setFetchingLoadingStatus(true))
  dispatch(setFetchingLoadingAllStatus(true))

  pollTickets(
    tickets => {
      dispatch(addTickets(tickets))
      maxTransfersCount = getMaxTransfersCount(tickets)
      dispatch(setAvailableTransfersOptions(orderedArray(maxTransfersCount + 1)))

      if (!firstSegmentPolled) {
        dispatch(setFetchingLoadingStatus(false))
        firstSegmentPolled = true
      }
    })
    .catch(() => {
      dispatch(setFetchingErrorStatus(true))
    })
    .finally(() => {
      dispatch(setFetchingLoadingAllStatus(false))
    })
}
