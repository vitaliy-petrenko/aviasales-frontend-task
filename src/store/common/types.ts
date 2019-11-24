export type TLocale = string
export type TCurrency = {
  name: string
  symbol: string
}

export interface ICommonState {
  currency: TCurrency
  locale: TLocale
}
