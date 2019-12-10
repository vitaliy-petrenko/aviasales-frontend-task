import { createSlice } from '@reduxjs/toolkit'
import { orderedArray } from '../../helpers/misc'
import { clearFindTickets } from './actions'

export enum ETicketsSortBy { price, duration }

export const INITIAL_STATE: IFindTicketsState = {
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

const getClearableExtraReducer = <T>(initialValue: T) => ({
  [clearFindTickets.type]: () => initialValue
})

export const transfers = createSlice({
  name: 'tickets/filters/transfers',
  initialState: INITIAL_STATE.filters.transfers,
  reducers: {
    setSelected: (state, action) => ({
      ...state,
      selected: action.payload,
    }),

    setAvailable: (state, action) => {
      const
        { selected, available } = state,
        isAllOptionsSelected = selected.length === available.length

      return {
        selected: isAllOptionsSelected ? [...action.payload] : selected,
        available: action.payload,
      }
    }
  },
  extraReducers: {
    ...getClearableExtraReducer(INITIAL_STATE.filters.transfers)
  }
})

export const sortBy = createSlice({
  name: 'tickets/sortBy',
  initialState: INITIAL_STATE.sortBy as ETicketsSortBy,
  reducers: {
    select: (state, action: TActionSortBy) => action.payload,
  },
  extraReducers: {
    ...getClearableExtraReducer(INITIAL_STATE.sortBy)
  }
})

export const tickets = createSlice({
  name: 'tickets/list',
  initialState: INITIAL_STATE.tickets as ITicket[],
  reducers: {
    add: (state, action) => [...state, ...action.payload],
  },
  extraReducers: {
    ...getClearableExtraReducer(INITIAL_STATE.tickets)
  }
})

export const statuses = createSlice({
  name: 'tickets/statuses',
  initialState: INITIAL_STATE.statuses as IFetchingStatuses,
  reducers: {
    setError: (state, action) => ({ ...state, isError: action.payload }),
    setFetching: (state, action) => ({ isError: false, isFetching: action.payload })
  },
  extraReducers: {
    ...getClearableExtraReducer(INITIAL_STATE.statuses)
  }
})

export const pagination = createSlice({
  name: 'tickets/pagination',
  initialState: INITIAL_STATE.pagination as IPagination,
  reducers: {},
  extraReducers: {
    ...getClearableExtraReducer(INITIAL_STATE.pagination)
  }
})

