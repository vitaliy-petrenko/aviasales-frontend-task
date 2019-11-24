import { createSelector } from 'reselect'
import { sortBy as _sortBy } from 'lodash'
import { IState } from '../rootReducer'
import { ETicketsSortBy, ITicket, ITicketFilters, ITicketSegment, ITicketsFetchingStatuses } from './types'
import { IPagination } from '../types'

/** simple selectors */
export const getFetchingStatuses = (state: IState): ITicketsFetchingStatuses => state.findTickets.fetchingStatuses
export const getFilters = (state: IState): ITicketFilters => state.findTickets.filters
export const getSortBy = (state: IState): number => state.findTickets.sortBy
export const getPagination = (state: IState): IPagination => state.findTickets.pagination
export const getAllTicketsList = (state: IState): ITicket[] => state.findTickets.tickets

/** reselect */
export const getTicketsListFiltered = createSelector<IState, ITicket[], ITicketFilters, ITicket[]>(
  getAllTicketsList,
  getFilters,
  (tickets, { transfers }) => {
    const getTransfersCounts = (ticket: ITicket): number[] => ticket.segments.map(({ stops }) => stops.length)

    return tickets.filter(ticket => {
      const allStops = getTransfersCounts(ticket)

      let count = 0

      allStops.forEach(stopCount => transfers.options.includes(stopCount) && count++)

      return count === allStops.length
    })
  })

const accumulateDuration = (segments: ITicketSegment[]): number => {
  return segments.reduce((accumulate, { duration }) => accumulate + duration, 0)
}

export const getTicketsListFilteredAndSorted = createSelector<IState, ITicket[], ETicketsSortBy, ITicket[]>(
  getTicketsListFiltered,
  getSortBy,
  (tickets, sortBy) => {
    if (sortBy === ETicketsSortBy.duration) {

      return _sortBy(tickets, (ticket) => accumulateDuration(ticket.segments))

    } else if (sortBy === ETicketsSortBy.price) {

      return _sortBy(tickets, ({ price }) => price)

    } else {
      return tickets
    }
  }
)

export const getFinalTicketList = createSelector<IState, ITicket[], IPagination, ITicket[]>(
  getTicketsListFilteredAndSorted,
  getPagination,
  (tickets, { offset, limit }) => tickets.slice(offset, offset + limit)
)
