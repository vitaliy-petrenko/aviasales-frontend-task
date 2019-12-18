import { currency, INITIAL_STATE, locale } from '../reducers'

describe('currency reducers', () => {
  it('should return initial state', () => {
    expect(currency()).toEqual(INITIAL_STATE.currency)
  })
})

describe('language reducers', () => {
  it('should return initial state', () => {
    expect(locale()).toEqual(INITIAL_STATE.locale)
  })
})
