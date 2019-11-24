import { ETicketsSortBy, IFindTicketsState, TActionAddTickets, TActionFilterTransfers, TActionSortBy } from './types'
import ACTION_TYPES from '../actionTypes'
import { IPagination, TActionFetchingStatus } from '../types'
import { orderedArray, toggleInArray } from '../../helpers/misc'

const INITIAL_STATE: IFindTicketsState = {
  fetchingStatuses: {
    isFetching: false,
    isError: false,
  },

  tickets: [],

  sortBy: ETicketsSortBy.price,

  filters: {
    transfers: {
      options: orderedArray(2),
      maxTransfersCount: 2,
    }
  },

  pagination: {
    offset: 0,
    limit: 10,
  },
}

export const transfers = (state = INITIAL_STATE.filters.transfers, { type, payload }: TActionFilterTransfers) => {
  const
    { options, maxTransfersCount } = state,
    isMaximumSelected = options.length === maxTransfersCount

  switch (type) {
    case ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_OPTION: {
      if (payload === -1) {
        return ({
          ...state,
          options: isMaximumSelected ? [] : orderedArray(maxTransfersCount),
        })
      } else {
        return {
          ...state,
          options: toggleInArray(options, payload),
        }
      }
    }

    case ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.SET_MAX_TRANSFERS_COUNT: {
      return {
        options: isMaximumSelected ? orderedArray(payload) : [...options],
        maxTransfersCount: payload
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

export const fetchingStatuses = (state = INITIAL_STATE.fetchingStatuses, { type, payload }: TActionFetchingStatus) => {
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
