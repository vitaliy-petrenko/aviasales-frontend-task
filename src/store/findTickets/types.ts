import { IActionBase, IPagination } from '../types'
import { IBaseTicket, IRawTicketSegment } from '../../api/types'

export interface ITicketSegment extends IRawTicketSegment {
  id: string
}

export interface ITicket extends IBaseTicket<ITicketSegment> {
  id: string
}

export interface ITicketFiltersTransfer {
  maxTransfersCount: number
  options: number[]
}

export interface ITicketFilters {
  transfers: ITicketFiltersTransfer
}

export interface ITicketsFetchingStatuses {
  isFetching: boolean
  isError: boolean
}

export enum ETicketsSortBy {price, duration}

export interface IFindTicketsState {
  tickets: ITicket[]
  fetchingStatuses: ITicketsFetchingStatuses
  sortBy: ETicketsSortBy
  filters: ITicketFilters
  pagination: IPagination
}

/** tickets section */
export type TActionAddTickets = IActionBase<ITicket[]>

/** sort section */
export type TActionSortBy = IActionBase<ETicketsSortBy>

/** filters section */
export type TActionFilterTransfersToggleOption = IActionBase<number>
export type TActionFilterTransfersSetMaxTransfersCount = IActionBase<number>
export type TActionFilterTransfers = TActionFilterTransfersToggleOption | TActionFilterTransfersSetMaxTransfersCount
