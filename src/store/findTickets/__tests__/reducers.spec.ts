import { ETicketsSortBy, INITIAL_STATE, pagination, sortBy, statuses, tickets, transfers } from '../reducers'
import { clearFindTickets } from '../actions'
import { ticket } from './helpers.spec'

describe('findTickets/reducers', () => {
  describe('statuses', () => {
    it('should return initialState', () => {
      const state = statuses.reducer(undefined, { type: 'default' })

      expect(state).toEqual(INITIAL_STATE.statuses)
    })

    it('should return isFetching', () => {
      const state = statuses.reducer(undefined, { type: statuses.actions.setFetching, payload: true })

      expect(state).toEqual({
        ...INITIAL_STATE.statuses,
        isFetching: true,
      })
    })

    it('should return isError', () => {
      const state = statuses.reducer(undefined, { type: statuses.actions.setError, payload: true })

      expect(state).toEqual({
        ...INITIAL_STATE.statuses,
        isError: true,
      })
    })

    it('should reset', () => {
      const state = statuses.reducer({
        isFetching: true,
        isError: true,
      }, { type: clearFindTickets.type })
      expect(state).toEqual(INITIAL_STATE.statuses)
    })
  })

  describe('pagination', () => {
    it('should return initialState', () => {
      const state = pagination.reducer(undefined, { type: 'default' })
      expect(state).toEqual(INITIAL_STATE.pagination)
    })

    it('should reset', () => {
      const state = pagination.reducer({ offset: 20, limit: 20 }, { type: clearFindTickets.type })
      expect(state).toEqual(INITIAL_STATE.pagination)
    })
  })

  describe('transfers', () => {
    it('should return initialState', () => {
      const state = transfers.reducer(undefined, { type: 'default' })

      expect(state).toEqual(INITIAL_STATE.filters.transfers)
    })

    it('setAvailableOptions should set new available + selected options when all old was selected', () => {
      const state = transfers.reducer({ available: [0], selected: [0] }, {
        type: transfers.actions.setAvailable.type,
        payload: [0, 1]
      })

      expect(state).toEqual({
        available: [0, 1],
        selected: [0, 1]
      })
    })

    it('setAvailableOptions should set only available options when not all was selected', () => {
      const state = transfers.reducer({ available: [0, 1], selected: [0] }, {
        type: transfers.actions.setAvailable.type,
        payload: [0, 1]
      })

      expect(state).toEqual({
        available: [0, 1],
        selected: [0]
      })
    })

    it('should set selected options', () => {
      const state = transfers.reducer({ available: [0, 1], selected: [0] }, {
        type: transfers.actions.setSelected.type,
        payload: [0, 1]
      })

      expect(state).toEqual({
        available: [0, 1],
        selected: [0, 1]
      })
    })

    it('should reset', () => {
      const state = transfers.reducer({ available: [], selected: [] }, { type: clearFindTickets.type })

      expect(state).toEqual(INITIAL_STATE.filters.transfers)
    })
  })

  describe('sortBy', () => {
    it('should return initialState', () => {
      const state = sortBy.reducer(undefined, { type: 'default' })

      expect(state).toEqual(INITIAL_STATE.sortBy)
    })

    it('should set sortBy', () => {
      const state = sortBy.reducer(ETicketsSortBy.duration, {
        type: sortBy.actions.select.type,
        payload: ETicketsSortBy.price
      })

      expect(state).toEqual(ETicketsSortBy.price)
    })

    it('should reset', () => {
      const state = sortBy.reducer(ETicketsSortBy.duration, { type: clearFindTickets.type })

      expect(state).toEqual(INITIAL_STATE.sortBy)
    })
  })

  describe('tickets', () => {
    it('should return initialState', () => {
      const state = tickets.reducer(undefined, { type: 'default' })

      expect(state).toEqual([])
    })

    it('should add ticket', () => {
      const state = tickets.reducer([ticket], { type: tickets.actions.add.type, payload: [ticket] })

      expect(state).toEqual([ticket, ticket])
    })

    it('should reset', () => {
      const state = tickets.reducer([ticket], { type: clearFindTickets.type })

      expect(state).toEqual([])
    })
  })
})
