import { ICommonState, TCurrency, TLanguage } from './types'

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
  language: 'ru-RU',
}

export const currency =
  (state: TCurrency = INITIAL_STATE.currency): TCurrency => {
    return state
  }

export const language =
  (state: TLanguage = INITIAL_STATE.language): TLanguage => {
    return state
  }
