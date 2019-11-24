const FIND_TICKETS_TYPES = {
  /** tickets */
  TICKETS: {
    ADD: 'FIND_TICKETS.TICKETS.ADD',
    CLEAR: 'FIND_TICKETS.TICKETS.CLEAR'
  },

  /** statuses */
  STATUSES: {
    IS_FETCHING: 'FIND_TICKETS.STATUSES.IS_FETCHING',
    IS_ERROR: 'FIND_TICKETS.STATUSES.IS_ERROR',
  },

  /** filters */
  FILTERS: {
    TRANSFERS: {
      TOGGLE_OPTION: 'FIND_TICKETS.FILTERS.TRANSFERS.TOGGLE_OPTION',
      SET_MAX_TRANSFERS_COUNT: 'FIND_TICKETS.FILTERS.TRANSFERS.SET_MAX_TRANSFERS_COUNT'
    }
  },

  /** sort */
  SORT_BY: 'FIND_TICKETS.SORT_BY',
}

const ACTION_TYPES = {
  FIND_TICKETS: FIND_TICKETS_TYPES
}

export default ACTION_TYPES
