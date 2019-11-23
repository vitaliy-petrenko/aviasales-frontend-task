export interface IActionBase<T> {
  type: string
  payload: T
}

export type TActionFetchingStatus = IActionBase<boolean>

export interface IPagination {
  offset: number
  limit: number
}
