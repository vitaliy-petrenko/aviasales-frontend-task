import { IFindTicketsState, TActionsFilters, TActionSortBy, TActionsTickets } from './types'
import ACTION_TYPES from '../actionTypes'

export const SORT_TYPES = {
  price: 0,
  time: 1,
}

const INITIAL_STATE: IFindTicketsState = {
  tickets: {
    list: [],
    isFetching: false,
    isError: false,
  },

  sortBy: SORT_TYPES.price,

  filters: {
    transfers: {
      all: true,
      options: [],
    }
  }
}

export const filters = (state = INITIAL_STATE.filters, { type, payload }: TActionsFilters) => {
  switch (type) {
    case (ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_ALL) :
      return state

    case (ACTION_TYPES.FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_OPTION) :
      return state

    default:
      return state
  }
}

export const sortBy = (state = INITIAL_STATE.sortBy, { type, payload }: TActionSortBy) => {
  if (type === ACTION_TYPES.FIND_TICKETS.SORT.BY) {
    return state
  } else {
    return state
  }
}

export const tickets = (state = INITIAL_STATE.tickets, { type, payload }: TActionsTickets) => {
  switch (type) {
    case (ACTION_TYPES.FIND_TICKETS.TICKETS.ADD) :
      return state

    case (ACTION_TYPES.FIND_TICKETS.TICKETS.IS_FETCHING) :
      return state

    case (ACTION_TYPES.FIND_TICKETS.TICKETS.IS_ERROR) :
      return state

    default:
      return state
  }
}


