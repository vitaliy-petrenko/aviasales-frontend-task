export type TLanguage = string
export type TCurrency = {
  name: string
  symbol: string
}

export interface ICommonState {
  currency: TCurrency
  language: TLanguage
}
