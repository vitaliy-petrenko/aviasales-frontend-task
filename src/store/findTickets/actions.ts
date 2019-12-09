import { Dispatch } from 'react'
import { createAction } from '@reduxjs/toolkit'
import { pollTickets } from '../../api/ticketApi'
import ACTION_TYPES from '../actionTypes'
import { arraysAreSame, joinArrays, uniqArrayItems } from '../../helpers/misc'
import { getAvailableOptions } from './helpers'
import { ETicketsSortBy } from './reducers'

export const setFetchingLoadingStatus =
  createAction<boolean>(ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING)

export const setFetchingLoadingAllStatus =
  createAction<boolean>(ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING_ALL)

export const setFetchingErrorStatus =
  createAction<boolean>(ACTION_TYPES.FIND_TICKETS.STATUSES.IS_ERROR)

export const addTickets =
  createAction<ITicket[]>(ACTION_TYPES.FIND_TICKETS.TICKETS.ADD)

export const clearFindTickets =
  createAction(ACTION_TYPES.FIND_TICKETS.CLEAR)

export const selectSortBy =
  createAction<ETicketsSortBy>(ACTION_TYPES.FIND_TICKETS.SORT_BY)

export const setAvailableTransfersOptions =
  createAction<number[]>(ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS)

export const setSelectedTransfersOptions =
  createAction<number[]>(ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS)

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

      if (!arraysAreSame(lastAvailableOptions, newAvailableOptions)) {
        lastAvailableOptions = uniqArrayItems(joinArrays(lastAvailableOptions, newAvailableOptions)).sort()
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
