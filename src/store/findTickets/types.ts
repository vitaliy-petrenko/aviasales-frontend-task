import { IActionBase, IPagination } from '../types'

export interface ITicketSegment {
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

export interface ITicket {
  id: string
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: ITicketSegment[]
}

export interface ITicketFiltersTransfer {
  all: boolean
  options: number[]
}

export interface ITicketFilters {
  transfers: ITicketFiltersTransfer
}

export interface ITicketStatuses {
  isFetching: boolean,
  isError: boolean,
}

export enum ETicketsSortBy {price, time}

export interface IFindTicketsState {
  tickets: ITicket[]
  statuses: ITicketStatuses
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
