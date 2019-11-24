import { TCurrency, TLocale } from './types'
import { IState } from '../rootReducer'

export const getCurrency = (state: IState): TCurrency => state.common.currency
export const getLocale = (state: IState): TLocale => state.common.locale
