import {
  ETicketsSortBy,
  INITIAL_STATE,
  pagination,
  sortBy,
  statuses,
  tickets,
  transfers
} from '../../store/findTickets/reducers'
import {
  addTickets,
  clearFindTickets,
  selectSortBy,
  setAvailableTransfersOptions,
  setFetchingErrorStatus,
  setFetchingLoadingAllStatus,
  setFetchingLoadingStatus,
  setSelectedTransfersOptions
} from '../../store/findTickets/actions'
import appStore from '../../store'
import { getFetchingStatuses, getFilters, getPagination, getSortBy } from '../../store/findTickets/selectors'
import { accumulateDuration, filterTickets, getTransfersCounts, sortTickets } from '../../store/findTickets/helpers'

const ticketSegment = {
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


describe('find tickets store', () => {
  describe('statuses', () => {
    describe('reducers', () => {
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

    describe('actions', () => {
      it('should return isFetchingAll action', () => {
        expect(setFetchingLoadingAllStatus(false)).toEqual({
          type: setFetchingLoadingAllStatus.type,
          payload: false,
        })
      })

      it('should return isFetching action', () => {
        expect(setFetchingLoadingStatus(true)).toEqual({
          type: setFetchingLoadingStatus.type,
          payload: true,
        })
      })

      it('should return isError action', () => {
        expect(setFetchingErrorStatus(false)).toEqual({
          type: setFetchingErrorStatus.type,
          payload: false
        })
      })
    })

    describe('selectors', () => {
      it('should return statuses', () => {
        expect(getFetchingStatuses(appStore.getState())).toEqual(INITIAL_STATE.statuses)
      })
    })
  })

  describe('pagination', () => {
    describe('reducers', () => {
      it('should return initialState', () => {
        const state = pagination(undefined, { type: 'default' })
        expect(state).toEqual(INITIAL_STATE.pagination)
      })

      it('should reset', () => {
        const state = pagination({ offset: 20, limit: 20 }, { type: clearFindTickets.type })
        expect(state).toEqual(INITIAL_STATE.pagination)
      })
    })

    describe('actions', () => {

    })

    describe('selectors', () => {
      it('should return pagination', () => {
        expect(getPagination(appStore.getState())).toEqual(INITIAL_STATE.pagination)
      })
    })
  })

  describe('transfers filters', () => {
    describe('reducers', () => {
      it('should return initialState', () => {
        const state = transfers(undefined, { type: 'default' })

        expect(state).toEqual(INITIAL_STATE.filters.transfers)
      })

      it('should set new available options', () => {
        const state = transfers(undefined, {
          type: setAvailableTransfersOptions.type,
          payload: [0, 1]
        })

        expect(state).toEqual({
          available: [0, 1],
          selected: [0, 1]
        })
      })

      it('should set new selected options', () => {
        const state = transfers(undefined, {
          type: setSelectedTransfersOptions.type,
          payload: [0]
        })

        expect(state).toEqual({
          available: INITIAL_STATE.filters.transfers.available,
          selected: [0]
        })
      })

      it('should reset', () => {
        const state = transfers({ available: [], selected: [] }, { type: clearFindTickets.type })

        expect(state).toEqual(INITIAL_STATE.filters.transfers)
      })
    })

    describe('actions', () => {
      it('should return setAvailable action', () => {
        expect(setAvailableTransfersOptions([])).toEqual({
          type: setAvailableTransfersOptions.type,
          payload: []
        })
      })

      it('should return setSelected action', () => {
        expect(setSelectedTransfersOptions([])).toEqual({
          type: setSelectedTransfersOptions.type,
          payload: []
        })
      })
    })

    describe('selectors', () => {
      it('should return transfers', () => {
        expect(getFilters(appStore.getState())).toEqual(INITIAL_STATE.filters)
      })
    })
  })

  describe('sortBy', () => {
    describe('reducers', () => {
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

    describe('actions', () => {
      it('should return selectSortBy action', () => {
        expect(selectSortBy(ETicketsSortBy.price)).toEqual({
          type: selectSortBy.type,
          payload: ETicketsSortBy.price
        })
      })
    })

    describe('selectors', () => {
      it('should return sortBy', () => {
        expect(getSortBy(appStore.getState())).toEqual(INITIAL_STATE.sortBy)
      })
    })
  })

  describe('tickets', () => {
    describe('reducers', () => {
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

    describe('actions', () => {

    })

    describe('selectors', () => {

    })

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
  })
})
