import config from './config'
import { fetchJSON } from '../helpers/fetch'
import { ITicket } from '../store/findTickets/types'
import { v4 } from 'uuid'

type TRawTicket = Omit<ITicket, 'id'>

const
  KEY_PATH = config.base + config.gateWays.searchKey,
  TICKETS_PATH = config.base + config.gateWays.tickets

const
  fetchTicketsSearchId = async (): Promise<string> => {
    const { searchId } = await fetchJSON(KEY_PATH)

    return searchId
  },
  normalizeTicket = (ticket: TRawTicket): ITicket => ({
    id: v4(),
    ...ticket,
  })

export const fetchTickets = async () => {
  const
    searchId = await fetchTicketsSearchId(),
    tickets: ITicket[] = [],
    path = `${TICKETS_PATH}?searchId=${searchId}`

  let stop = false

  while (!stop) try {
    const result = await fetchJSON(path)

    stop = result.stop

    tickets.push(...result.tickets.map(normalizeTicket))

  } catch (error) {
    console.warn(error)
  }

  return tickets
}
