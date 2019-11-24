import { IActionBase, IFetchingStatuses, IPagination } from '../types'

export interface IBaseTicketSegment {
  // Код города (iata)
  origin: string
  // Код города (iata)
  destination: string
  // Дата и время вылета туда
  date: string
  // Массив кодов (iata) городов с пересадками
  stops: string[]
  // Общее время перелёта в минутах
  duration: number
}

export interface IBaseTicket<S> {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: S[]
}

export interface ITicketSegment extends IBaseTicketSegment {
  id: string
}

export interface ITicket extends IBaseTicket<ITicketSegment> {
  id: string
}

export interface ITicketFiltersTransfer {
  available: number[]
  selected: number[]
}

export interface ITicketFilters {
  transfers: ITicketFiltersTransfer
}

export enum ETicketsSortBy {price, duration}

export interface IFindTicketsState {
  tickets: ITicket[]
  statuses: IFetchingStatuses
  sortBy: ETicketsSortBy
  filters: ITicketFilters
  pagination: IPagination
}

/** tickets section */
export type TActionAddTickets = IActionBase<ITicket[]>

/** sort section */
export type TActionSortBy = IActionBase<ETicketsSortBy>

/** filters section */
export type TActionFilterTransfers = IActionBase<number[]>

