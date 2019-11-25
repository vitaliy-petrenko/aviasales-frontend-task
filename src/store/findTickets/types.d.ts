interface IBaseTicketSegment {
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

interface IBaseTicket<S> {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: S[]
}

interface ITicketSegment extends IBaseTicketSegment {
  id: string
}

interface ITicket extends IBaseTicket<ITicketSegment> {
  id: string
}

interface ITicketFiltersTransferState {
  available: number[]
  selected: number[]
}

interface ITicketFiltersState {
  transfers: ITicketFiltersTransferState
}

interface IFindTicketsState {
  tickets: ITicket[]
  statuses: IFetchingStatuses
  sortBy: TTicketsSortByState
  filters: ITicketFiltersState
  pagination: IPagination
}

type TTicketsSortByState = number

/** tickets section */
type TActionAddTickets = IActionBase<ITicket[]>

/** sort section */
type TActionSortBy = IActionBase<TTicketsSortByState>

/** filters section */
type TActionFilterTransfers = IActionBase<number[]>
