import { INITIAL_STATE } from '../reducers'
import { getCurrency, getLocale } from '../selectors'
import appStore from '../../index'

const appState = appStore.getState()

describe('currency selectors', () => {
  it('should return currency', () => {
    expect(getCurrency(appState)).toEqual(INITIAL_STATE.currency)
  })
})

describe('language selectors', () => {
  it('should return language', () => {
    expect(getLocale(appState)).toEqual(INITIAL_STATE.locale)
  })
})
