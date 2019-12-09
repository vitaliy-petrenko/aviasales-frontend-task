import { createSelector } from '@reduxjs/toolkit'
import { IState } from '../rootReducer'
import { filterTickets, sortTickets } from './helpers'

/** simple selectors */
export const getFetchingStatuses = (state: IState): IFetchingStatuses => state.findTickets.statuses
export const getFilters = (state: IState): ITicketFiltersState => state.findTickets.filters
export const getSortBy = (state: IState): number => state.findTickets.sortBy
export const getPagination = (state: IState): IPagination => state.findTickets.pagination
export const getAllTicketsList = (state: IState): ITicket[] => state.findTickets.tickets

/** reselect */
export const getTicketsListSorted = createSelector<IState, ITicket[], TTicketsSortByState, ITicket[]>(
  getAllTicketsList,
  getSortBy,
  sortTickets,
)

export const getFinalTicketList = createSelector<IState, ITicket[], ITicketFiltersState, IPagination, ITicket[]>(
  getTicketsListSorted,
  getFilters,
  getPagination,
  filterTickets,
)
