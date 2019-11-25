import { Dispatch } from 'react'
import { createAction } from '@reduxjs/toolkit'
import { pollTickets } from '../../api/ticketApi'
import ACTION_TYPES from '../actionTypes'
import { arraysIsSame, mergeArrays } from '../../helpers/misc'

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
  (sortBy: TTicketsSortByState) => ({
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

const getAvailableOptions = (tickets: ITicket[]): number[] => {
  let availableOptions = new Set<number>()

  for (let i = 0; i < tickets.length; i++) {
    tickets[i].segments.forEach(({ stops }) => availableOptions.add.call(availableOptions, stops.length))
  }

  return Array.from(availableOptions).sort()
}

export const fetchTickets = () => (dispatch: Dispatch<TAppAnyAction>) => {
  let
    firstSegmentPolled = false,
    lastAvailableOptions: number[] = []

  dispatch(setFetchingErrorStatus(false))
  dispatch(setFetchingLoadingStatus(true))
  dispatch(setFetchingLoadingAllStatus(true))

  pollTickets(
    tickets => {
      dispatch(addTickets(tickets))

      const newAvailableOptions = getAvailableOptions(tickets)

      if (!arraysIsSame(lastAvailableOptions, newAvailableOptions)) {
        lastAvailableOptions = mergeArrays(lastAvailableOptions, newAvailableOptions).sort()
        dispatch(setAvailableTransfersOptions(lastAvailableOptions))
      }

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
