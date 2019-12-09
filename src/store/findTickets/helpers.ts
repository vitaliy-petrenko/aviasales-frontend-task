import { ETicketsSortBy } from './reducers'
import { arraysAreSame } from '../../helpers/misc'

export const accumulateDuration = (segments: ITicketSegment[]): number => {
  return segments.reduce((accumulate, { duration }) => accumulate + duration, 0)
}

export const sortTickets = (tickets: ITicket[], sortBy: ETicketsSortBy) => {
  if (sortBy === ETicketsSortBy.duration) {
    return tickets.slice().sort((a, b) => accumulateDuration(a.segments) - accumulateDuration(b.segments))
  } else if (sortBy === ETicketsSortBy.price) {
    return tickets.slice().sort((a, b) => a.price - b.price)
  } else {
    return tickets
  }
}

export const getTransfersCounts = (ticket: ITicket): number[] => ticket.segments.map(({ stops }) => stops.length)

export const filterTicketsWithPagination = (tickets: ITicket[], { transfers }: ITicketFiltersState, { offset, limit }: IPagination) => {
  const
    isAllSelected = arraysAreSame(transfers.selected, transfers.available),
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

  return filtered.slice(offset)
}

export const getAvailableOptions = (tickets: ITicket[]): number[] => {
  let availableOptions = new Set<number>()

  for (let i = 0; i < tickets.length; i++) {
    tickets[i].segments.forEach(({ stops }) => availableOptions.add.call(availableOptions, stops.length))
  }

  return Array.from(availableOptions).sort()
}
