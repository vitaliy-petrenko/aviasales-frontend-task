import { createSelector } from '@reduxjs/toolkit'
import { IState } from '../rootReducer'
import { ETicketsSortBy } from './reducers'

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
  (tickets, sortBy) => {
    if (sortBy === ETicketsSortBy.duration) {
      return tickets.slice().sort((a, b) => accumulateDuration(a.segments) - accumulateDuration(b.segments))
    } else if (sortBy === ETicketsSortBy.price) {
      return tickets.slice().sort((a, b) => a.price - b.price)
    } else {
      return tickets
    }
  }
)

export const getTicketsListFiltered = createSelector<IState, ITicket[], ITicketFiltersState, ITicket[]>(
  getTicketsListSorted,
  getFilters,
  (tickets, { transfers }) => {
    const getTransfersCounts = (ticket: ITicket): number[] => ticket.segments.map(({ stops }) => stops.length)

    return tickets.filter(ticket => {
      const allStops = getTransfersCounts(ticket)

      let count = 0

      allStops.forEach(stopCount => transfers.selected.includes(stopCount) && count++)

      return count === allStops.length
    })
  })


const accumulateDuration = (segments: ITicketSegment[]): number => {
  return segments.reduce((accumulate, { duration }) => accumulate + duration, 0)
}


export const getFinalTicketList = createSelector<IState, ITicket[], IPagination, ITicket[]>(
  getTicketsListFiltered,
  getPagination,
  (tickets, { offset, limit }) => tickets.slice(offset, offset + limit)
)
