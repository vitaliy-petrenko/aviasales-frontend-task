import { normalizeTicket, normalizeTicketSegment } from '../ticketNormalizers'

const ticketSegment: IRawTicketSegment = {
  origin: '',
  destination: '',
  date: '2019-12-18T06:18:00.000Z',
  stops: ['a', 'b'],
  duration: 60,
}

const ticket: IRawTicket = {
  price: 100,
  carrier: '',
  segments: [ticketSegment],
}

describe('ticket normalizers', () => {
  it('segment', () => {
    expect(normalizeTicketSegment(ticketSegment).id).toBeTruthy()
  })

  it('ticket', () => {
    const normalized = normalizeTicket(ticket)

    expect(normalized.id).toBeTruthy()
    expect(normalized.segments[0].id).toBeTruthy()
  })
})
