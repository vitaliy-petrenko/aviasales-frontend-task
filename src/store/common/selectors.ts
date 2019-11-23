import { TCurrency, TLanguage } from './types'
import { IState } from '../rootReducer'

export const getCurrency = (state: IState): TCurrency => state.common.currency
export const getLanguage = (state: IState): TLanguage => state.common.language
