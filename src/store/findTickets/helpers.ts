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

export const getAvailableTransfers = (tickets: ITicket[]): number[] => {
  const availableTransfersSet = tickets.reduce((result, ticket) => {
    getTransfersCounts(ticket).forEach(result.add.bind(result))
    return result
  }, new Set<number>())

  return Array.from(availableTransfersSet).sort()
}
