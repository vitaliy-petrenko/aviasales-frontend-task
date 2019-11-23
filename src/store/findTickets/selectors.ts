import { IState } from '../rootReducer'
import { ITicket, ITicketFilters, ITicketFiltersTransfer } from './types'
import { IPagination } from '../types'

/** simple selectors */
export const getTicketsList = (state: IState): ITicket[] => state.findTickets.tickets
export const getFilters = (state: IState): ITicketFilters => state.findTickets.filters
export const getSortBy = (state: IState): number => state.findTickets.sortBy
export const getTransfers = (state: IState): ITicketFiltersTransfer => state.findTickets.filters.transfers
export const getPagination = (state: IState): IPagination => state.findTickets.pagination

export const getTicketsListSorted = (state: IState): ITicket[] => getTicketsList(state)
export const getTicketsListFiltered = (state: IState): ITicket[] => getTicketsList(state)
export const getTicketsListFilteredAndSorted = (state: IState): ITicket[] => getTicketsList(state)
