import { createSelector } from '@reduxjs/toolkit'
import { IState } from '../rootReducer'
import { ETicketsSortBy } from './reducers'

/** simple selectors */
export const getFetchingStatuses = (state: IState): IFetchingStatuses => state.findTickets.statuses
export const getFilters = (state: IState): ITicketFiltersState => state.findTickets.filters
export const getSortBy = (state: IState): number => state.findTickets.sortBy
export const getPagination = (state: IState): IPagination => state.findTickets.pagination
export const getAllTicketsList = (state: IState): ITicket[] => state.findTickets.tickets

const accumulateDuration = (segments: ITicketSegment[]): number => {
  return segments.reduce((accumulate, { duration }) => accumulate + duration, 0)
}

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

export const getFinalTicketList = createSelector<IState, ITicket[], ITicketFiltersState, IPagination, ITicket[]>(
  getTicketsListSorted,
  getFilters,
  getPagination,
  (tickets, { transfers }, { offset, limit }) => {
    const
      getTransfersCounts = (ticket: ITicket): number[] => ticket.segments.map(({ stops }) => stops.length),
      isAllSelected = transfers.selected.length === transfers.available.length,
      isNothingSelected = !transfers.selected.length,
      filtered: ITicket[] = []

    if (isAllSelected) return tickets.slice(offset, offset + limit)
    if (isNothingSelected) return []

    for (let i = 0; i < tickets.length && filtered.length < offset + limit; i++) {
      const
        ticket = tickets[i],
        allStops = getTransfersCounts(ticket)

      let count = 0

      allStops.forEach(stopCount => transfers.selected.includes(stopCount) && count++)

      if (count === allStops.length) filtered.push(ticket)
    }

    return filtered
  })
