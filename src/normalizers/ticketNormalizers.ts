import { IRawTicket, IRawTicketSegment } from '../api/types'
import { ITicket, ITicketSegment } from '../store/findTickets/types'
import { v4 } from 'uuid'

export const normalizeTicket = (ticket: IRawTicket): ITicket => {
  const { segments, ...rest } = ticket

  return {
    id: v4(),
    segments: ticket.segments.map(normalizeTicketSegment),
    ...rest
  }
}

export const normalizeTicketSegment = (segment: IRawTicketSegment): ITicketSegment => ({
  id: v4(),
  ...segment,
})
