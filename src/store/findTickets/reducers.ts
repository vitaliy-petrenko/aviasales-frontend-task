import { createReducer } from '@reduxjs/toolkit'
import { orderedArray } from '../../helpers/misc'
import {
  addTickets,
  clearFindTickets,
  selectSortBy,
  setAvailableTransfersOptions,
  setFetchingLoadingAllStatus,
  setFetchingLoadingStatus,
  setSelectedTransfersOptions
} from './actions'

export enum ETicketsSortBy {price, duration}

const INITIAL_STATE: IFindTicketsState = {
  statuses: {
    isFetching: false,
    isError: false,
    isFetchingAll: false,
  },

  tickets: [],

  sortBy: ETicketsSortBy.price,

  filters: {
    transfers: {
      available: orderedArray(2),
      selected: orderedArray(2),
    }
  },

  pagination: {
    offset: 0,
    limit: 5,
  },
}

export const transfers = createReducer(INITIAL_STATE.filters.transfers, {
  [setSelectedTransfersOptions.type]: (state, action) => ({
    ...state,
    selected: action.payload,
  }),

  [setAvailableTransfersOptions.type]: (state, action) => {
    const
      { selected, available } = state,
      isAllOptionsSelected = selected.length === available.length

    return {
      selected: isAllOptionsSelected ? [...action.payload] : selected,
      available: action.payload,
    }
  },

  [clearFindTickets.type]: () => ({
    ...INITIAL_STATE.filters.transfers
  })
})

export const sortBy = createReducer(INITIAL_STATE.sortBy, {
  [selectSortBy.type]: (state, action) => {
    return action.payload
  },
  [clearFindTickets.type]: () => INITIAL_STATE.sortBy
})

export const tickets = createReducer(INITIAL_STATE.tickets, {
  [addTickets.type]: (state, action) => [...state, ...action.payload],

  [clearFindTickets.type]: (state, action) => [...INITIAL_STATE.tickets]
})

export const statuses = createReducer(INITIAL_STATE.statuses, {
  [setFetchingLoadingAllStatus.type]: (state, action) => ({
    ...state,
    isFetchingAll: action.payload,
  }),
  [setFetchingLoadingStatus.type]: (state, action) => ({
    ...state,
    isError: action.payload,
  }),
  [setFetchingLoadingStatus.type]: (state, action) => ({
    ...state,
    isFetching: action.payload,
  }),
  [clearFindTickets.type]: () => ({
    ...INITIAL_STATE.statuses
  })
})

export const pagination = createReducer(INITIAL_STATE.pagination, {
  [clearFindTickets.type]: () => ({
    ...INITIAL_STATE.pagination
  })
})
