import { currency, INITIAL_STATE, locale } from '../../store/common/reducers'
import { getCurrency, getLocale } from '../../store/common/selectors'
import appStore from '../../store'

describe('common store', () => {
  describe('currency', () => {
    describe('reducers', () => {
      it('should return initial state', () => {
        expect(currency()).toEqual(INITIAL_STATE.currency)
      })
    })

    describe('selectors', () => {
      it('should return currency', () => {
        expect(getCurrency(appStore.getState())).toEqual(INITIAL_STATE.currency)
      })
    })
  })


  describe('language', () => {
    describe('reducers', () => {
      it('should return initial state', () => {
        expect(locale()).toEqual(INITIAL_STATE.locale)
      })
    })

    describe('selectors', () => {
      it('should return language', () => {
        expect(getLocale(appStore.getState())).toEqual(INITIAL_STATE.locale)
      })
    })
  })
})
