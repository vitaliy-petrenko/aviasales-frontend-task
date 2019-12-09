import { ETicketsSortBy, INITIAL_STATE, pagination, sortBy, statuses, tickets, transfers } from '../reducers'
import {
  addTickets,
  clearFindTickets,
  selectSortBy,
  setAvailableTransfersOptions,
  setFetchingErrorStatus,
  setFetchingLoadingAllStatus,
  setFetchingLoadingStatus,
  setSelectedTransfersOptions
} from '../actions'

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


describe('findTickets/reducers', () => {
  describe('statuses', () => {
    it('should return initialState', () => {
      const state = statuses(undefined, { type: 'default' })

      expect(state).toEqual(INITIAL_STATE.statuses)
    })

    it('should return isFetchingAll', () => {
      const state = statuses(undefined, { type: setFetchingLoadingAllStatus, payload: true })

      expect(state).toEqual({
        ...INITIAL_STATE.statuses,
        isFetchingAll: true,
      })
    })

    it('should return isFetching', () => {
      const state = statuses(undefined, { type: setFetchingLoadingStatus, payload: true })

      expect(state).toEqual({
        ...INITIAL_STATE.statuses,
        isFetching: true,
      })
    })

    it('should return isError', () => {
      const state = statuses(undefined, { type: setFetchingErrorStatus, payload: true })

      expect(state).toEqual({
        ...INITIAL_STATE.statuses,
        isError: true,
      })
    })

    it('should reset', () => {
      const state = statuses({
        isFetching: true,
        isError: true,
        isFetchingAll: true
      }, { type: clearFindTickets.type })
      expect(state).toEqual(INITIAL_STATE.statuses)
    })
  })

  describe('pagination', () => {
    it('should return initialState', () => {
      const state = pagination(undefined, { type: 'default' })
      expect(state).toEqual(INITIAL_STATE.pagination)
    })

    it('should reset', () => {
      const state = pagination({ offset: 20, limit: 20 }, { type: clearFindTickets.type })
      expect(state).toEqual(INITIAL_STATE.pagination)
    })
  })

  describe('transfers', () => {
    it('should return initialState', () => {
      const state = transfers(undefined, { type: 'default' })

      expect(state).toEqual(INITIAL_STATE.filters.transfers)
    })

    it('setAvailableOptions should set new available + selected options when all old was selected', () => {
      const state = transfers({ available: [0], selected: [0] }, {
        type: setAvailableTransfersOptions.type,
        payload: [0, 1]
      })

      expect(state).toEqual({
        available: [0, 1],
        selected: [0, 1]
      })
    })

    it('setAvailableOptions should set only available options when not all was selected', () => {
      const state = transfers({ available: [0, 1], selected: [0] }, {
        type: setAvailableTransfersOptions.type,
        payload: [0, 1]
      })

      expect(state).toEqual({
        available: [0, 1],
        selected: [0]
      })
    })

    it('should set selected options', () => {
      const state = transfers({ available: [0, 1], selected: [0] }, {
        type: setSelectedTransfersOptions.type,
        payload: [0, 1]
      })

      expect(state).toEqual({
        available: [0, 1],
        selected: [0, 1]
      })
    })


    it('should reset', () => {
      const state = transfers({ available: [], selected: [] }, { type: clearFindTickets.type })

      expect(state).toEqual(INITIAL_STATE.filters.transfers)
    })
  })

  describe('sortBy', () => {
    it('should return initialState', () => {
      const state = sortBy(undefined, { type: 'default' })

      expect(state).toEqual(INITIAL_STATE.sortBy)
    })

    it('should set sortBy', () => {
      const state = sortBy(ETicketsSortBy.duration, {
        type: selectSortBy.type,
        payload: ETicketsSortBy.price
      })

      expect(state).toEqual(ETicketsSortBy.price)
    })

    it('should reset', () => {
      const state = sortBy(ETicketsSortBy.duration, { type: clearFindTickets.type })

      expect(state).toEqual(INITIAL_STATE.sortBy)
    })
  })

  describe('tickets', () => {
    it('should return initialState', () => {
      const state = tickets(undefined, { type: 'default' })

      expect(state).toEqual([])
    })

    it('should add ticket', () => {
      const state = tickets([ticket], { type: addTickets.type, payload: [ticket] })

      expect(state).toEqual([ticket, ticket])
    })

    it('should reset', () => {
      const state = tickets([ticket], { type: clearFindTickets.type })

      expect(state).toEqual([])
    })
  })
})
