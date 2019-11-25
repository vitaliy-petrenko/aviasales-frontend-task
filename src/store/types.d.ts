type TActionWithOnlyType = {
  type: string
}

interface IActionBase<T> extends TActionWithOnlyType {
  type: string
  payload: T
}

type TActionFetchingStatus = IActionBase<boolean>

interface IPagination {
  offset: number
  limit: number
}

interface IFetchingStatuses {
  isFetching: boolean
  isError: boolean
  isFetchingAll: boolean
}

type TAppAnyAction =
  | TActionFetchingStatus
  | TActionAddTickets
  | TActionFilterTransfers
  | TActionSortBy
  | TActionWithOnlyType
