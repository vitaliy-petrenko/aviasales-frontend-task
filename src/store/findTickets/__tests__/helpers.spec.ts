import { accumulateDuration, filterTickets, getTransfersCounts, sortTickets } from '../helpers'
import { ETicketsSortBy } from '../reducers'

const ticketSegment: ITicketSegment = {
  id: 'segmentId',
  origin: 'origin',
  destination: 'destination',
  date: '2019-12-18T06:18:00.000Z',
  stops: ['a', 'b'],
  duration: 60,
}

const ticket: ITicket = {
  price: 100,
  carrier: 'ua',
  id: 'ticketId',
  segments: [ticketSegment],
}

describe('helpers', () => {
  it('accumulateDuration from segments', () => {
    expect(accumulateDuration([ticketSegment, ticketSegment])).toBe(ticketSegment.duration * 2)
  })

  describe('sort tickets', () => {
    it('by price', () => {
      expect(sortTickets([{
        ...ticket,
        id: '1',
        price: 200
      }, {
        ...ticket,
        id: '2',
        price: 100
      }], ETicketsSortBy.price).map(({ id }) => id)).toEqual(['2', '1'])
    })

    it('by duration', () => {
      expect(sortTickets([{
        ...ticket,
        id: '1',
        segments: [{
          ...ticketSegment,
          duration: 200
        }]
      }, {
        ...ticket,
        id: '2',
        segments: [{
          ...ticketSegment,
          duration: 100
        }]
      }], ETicketsSortBy.duration).map(({ id }) => id)).toEqual(['2', '1'])
    })
  })

  it('get transfers counts', () => {
    expect(getTransfersCounts(ticket)).toEqual([ticket.segments[0].stops.length])
  })

  it('filter zero tickets', () => {
    const tickets: ITicket[] = []

    expect(filterTickets(tickets, { transfers: { selected: [0], available: [0] } }, {
      offset: 2,
      limit: 2
    })).toEqual([])
  })

  it('filter tickets', () => {
    const tickets = [
      {
        ...ticket,
        id: '1',
        segments: [{
          ...ticketSegment,
          stops: ['a']
        }]
      },
      {
        ...ticket,
        id: '2',
        segments: [{
          ...ticketSegment,
          stops: ['a', 'b']
        }]
      },
      {
        ...ticket,
        id: '3',
        segments: [{
          ...ticketSegment,
          stops: ['a']
        }]
      },
      {
        ...ticket,
        id: '4',
        segments: [{
          ...ticketSegment,
          stops: ['a']
        }]
      },
      {
        ...ticket,
        id: '5',
        segments: [{
          ...ticketSegment,
          stops: ['a']
        }]
      }
    ]

    /**
     * will filter tickets from (0) to (offset + limit), not from (offset) to (offset + limit)
     */
    expect(
      filterTickets(
        tickets,
        { transfers: { selected: [1], available: [0, 1, 2] } },
        { offset: 1, limit: 2 }
      ).map(({ id }) => id)
    ).toEqual(['1', '3', '4'])
  })
})
