import { IState } from '../rootReducer'
import { ITicket, ITicketFilters } from './types'

export const getTicketsList = (state: IState): ITicket[] => state.findTickets.tickets.list
export const getTicketsListSorted = (state: IState): ITicket[] => state.findTickets.tickets.list
export const getTicketsListFiltered = (state: IState): ITicket[] => state.findTickets.tickets.list
export const getTicketsListFilteredAndSorted = (state: IState): ITicket[] => state.findTickets.tickets.list

export const getFilters = (state: IState): ITicketFilters => state.findTickets.filters
export const getSortBy = (state: IState): number => state.findTickets.sortBy
