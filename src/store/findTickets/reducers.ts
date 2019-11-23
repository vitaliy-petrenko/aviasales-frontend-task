import {
  ETicketsSortBy,
  IFindTicketsState,
  TActionAddTickets,
  TActionFilterTransfersToggleOption,
  TActionSortBy
} from './types'
import ACTION_TYPES from '../actionTypes'
import { IPagination, TActionFetchingStatus } from '../types'

const INITIAL_STATE: IFindTicketsState = {
  statuses: {
    isFetching: false,
    isError: false,
  },

  tickets: [],

  sortBy: ETicketsSortBy.price,

  filters: {
    transfers: {
      all: true,
      options: [],
    }
  },

  pagination: {
    offset: 0,
    limit: 5,
  },
}

export const transfers = (state = INITIAL_STATE.filters.transfers, { type, payload }: TActionFilterTransfersToggleOption) => {
  switch (type) {
    case ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_ALL:
      return ({
        options: INITIAL_STATE.filters.transfers.options,
        all: !state.all,
      })

    case ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_OPTION:
      const { options } = state

      return {
        all: false,
        options: options.includes(payload) ? options.filter(option => option !== payload) : [...options, payload],
      }

    default:
      return state
  }
}

export const sortBy = (state = INITIAL_STATE.sortBy, { type, payload }: TActionSortBy) => {
  if (type === ACTION_TYPES.FIND_TICKETS.SORT_BY) {
    return payload
  } else {
    return state
  }
}

export const tickets = (state = INITIAL_STATE.tickets, { type, payload }: TActionAddTickets) => {
  switch (type) {
    case ACTION_TYPES.FIND_TICKETS.TICKETS.ADD:
      return [...state, ...payload]

    case ACTION_TYPES.FIND_TICKETS.TICKETS.CLEAR:
      return INITIAL_STATE.tickets

    default:
      return state
  }
}

export const statuses = (state = INITIAL_STATE.statuses, { type, payload }: TActionFetchingStatus) => {
  switch (type) {
    case ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING:
      return {
        isFetching: payload,
        ...state,
      }

    case ACTION_TYPES.FIND_TICKETS.STATUSES.IS_ERROR:
      return {
        isError: payload,
        ...state,
      }

    default:
      return state
  }
}

export const pagination = (state = INITIAL_STATE.pagination): IPagination => {
  return state
}
