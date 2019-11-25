const FIND_TICKETS_TYPES = {
  CLEAR: 'FIND_TICKETS.TICKETS.CLEAR',

  /** tickets */
  TICKETS: {
    ADD: 'FIND_TICKETS.TICKETS.ADD',
  },

  /** statuses */
  STATUSES: {
    IS_FETCHING: 'FIND_TICKETS.STATUSES.IS_FETCHING',
    IS_ERROR: 'FIND_TICKETS.STATUSES.IS_ERROR',
  },

  /** filters */
  FILTERS: {
    TRANSFERS: {
      SET_SELECTED_OPTIONS: 'FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS',
      SET_AVAILABLE_OPTIONS: 'FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS'
    }
  },

  /** sort */
  SORT_BY: 'FIND_TICKETS.SORT_BY',
}

const ACTION_TYPES = {
  FIND_TICKETS: FIND_TICKETS_TYPES
}

export default ACTION_TYPES
