import { ETicketsSortBy, IFindTicketsState, TActionAddTickets, TActionFilterTransfers, TActionSortBy } from './types'
import ACTION_TYPES from '../actionTypes'
import { IPagination, TActionFetchingStatus } from '../types'
import { orderedArray } from '../../helpers/misc'

const INITIAL_STATE: IFindTicketsState = {
  statuses: {
    isFetching: false,
    isError: false,
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

export const transfers = (state = INITIAL_STATE.filters.transfers, { type, payload }: TActionFilterTransfers) => {
  switch (type) {
    case ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS: {
      return {
        ...state,
        selected: payload,
      }
    }

    case ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS: {
      const
        { selected, available } = state,
        isAllOptionsSelected = selected.length === available.length

      return {
        selected: isAllOptionsSelected ? [...payload] : selected,
        available: payload,
      }
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
    case ACTION_TYPES.FIND_TICKETS.TICKETS.ADD: {
      return [...state, ...payload]
    }

    case ACTION_TYPES.FIND_TICKETS.TICKETS.CLEAR: {
      return INITIAL_STATE.tickets
    }

    default:
      return state
  }
}

export const statuses = (state = INITIAL_STATE.statuses, { type, payload }: TActionFetchingStatus) => {
  switch (type) {
    case ACTION_TYPES.FIND_TICKETS.STATUSES.IS_FETCHING: {
      return {
        ...state,
        isFetching: payload,
      }
    }

    case ACTION_TYPES.FIND_TICKETS.STATUSES.IS_ERROR: {
      return {
        ...state,
        isError: payload,
      }
    }

    default:
      return state
  }
}

export const pagination = (state = INITIAL_STATE.pagination): IPagination => {
  return state
}
