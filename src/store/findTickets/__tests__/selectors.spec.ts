import { getFetchingStatuses, getFilters, getPagination, getSortBy } from '../selectors'
import appStore from '../../index'
import { INITIAL_STATE } from '../reducers'

const appState = appStore.getState()

describe('findTickets/selectors', () => {
  describe('statuses', () => {
    it('should return statuses', () => {
      expect(getFetchingStatuses(appState)).toEqual(INITIAL_STATE.statuses)
    })
  })

  describe('pagination', () => {
    it('should return pagination', () => {
      expect(getPagination(appState)).toEqual(INITIAL_STATE.pagination)
    })
  })

  describe('transfers', () => {
    it('should return transfers', () => {
      expect(getFilters(appState)).toEqual(INITIAL_STATE.filters)
    })
  })

  describe('sortBy', () => {
    it('should return sortBy', () => {
      expect(getSortBy(appState)).toEqual(INITIAL_STATE.sortBy)
    })
  })
})
