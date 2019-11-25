type TLocale = string
type TCurrency = {
  name: string
  symbol: string
}

interface ICommonState {
  currency: TCurrency
  locale: TLocale
}
