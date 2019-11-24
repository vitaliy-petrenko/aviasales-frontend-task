import { TActionAddTickets, TActionFilterTransfers, TActionSortBy } from './findTickets/types'

export type TActionWithOnlyType = {
  type: string
}

export interface IActionBase<T> extends TActionWithOnlyType {
  type: string
  payload: T
}

export type TActionFetchingStatus = IActionBase<boolean>

export interface IPagination {
  offset: number
  limit: number
}

export type TAppAnyAction =
  | TActionFetchingStatus
  | TActionAddTickets
  | TActionFilterTransfers
  | TActionSortBy
  | TActionWithOnlyType
