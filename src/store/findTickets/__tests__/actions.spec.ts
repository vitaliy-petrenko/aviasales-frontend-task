import {
  selectSortBy,
  setAvailableTransfersOptions,
  setFetchingErrorStatus,
  setFetchingLoadingAllStatus,
  setFetchingLoadingStatus,
  setSelectedTransfersOptions
} from '../actions'
import { ETicketsSortBy } from '../reducers'

describe('findTickets/actions', () => {
  describe('statuses', () => {
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

  describe('transfers', () => {
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

  describe('sortBy', () => {
    it('should return selectSortBy action', () => {
      expect(selectSortBy(ETicketsSortBy.price)).toEqual({
        type: selectSortBy.type,
        payload: ETicketsSortBy.price
      })
    })
  })

})
