import { IActionBase } from '../types'

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

export interface ITicketFilters {
  transfers: {
    all: boolean
    options: number[]
  }
}

export interface ITicketsState {
  list: ITicket[],
  isFetching: boolean,
  isError: boolean,
}

export type TSortBy = number;

export interface IFindTicketsState {
  tickets: ITicketsState
  sortBy: TSortBy
  filters: ITicketFilters
}

/** tickets section */
export type TActionFetchingStatus = IActionBase<boolean>
export type TActionAddTickets = IActionBase<ITicket[]>
export type TActionsTickets = TActionFetchingStatus | TActionAddTickets

/** sort section */
export type TActionSortBy = IActionBase<TSortBy>

/** filters section */
export type TActionFilterTransfersToggleOption = IActionBase<number>
export type TActionFilterTransfersToggleAll = IActionBase<boolean>
export type TActionsFilters = TActionFilterTransfersToggleOption | TActionFilterTransfersToggleAll
