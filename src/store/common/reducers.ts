import { ICommonState, TCurrency, TLocale } from './types'

const CURRENCIES = {
  RUB: {
    name: 'RUB',
    symbol: 'Р'
  },
  USD: {
    name: 'USD',
    symbol: '$'
  }
}

const INITIAL_STATE: ICommonState = {
  currency: CURRENCIES.RUB,
  locale: 'ru-RU',
}

export const currency =
  (state: TCurrency = INITIAL_STATE.currency): TCurrency => {
    return state
  }

export const locale =
  (state: TLocale = INITIAL_STATE.locale): TLocale => {
    return state
  }
