import config from './config'
import { fetchJSON } from '../helpers/fetch'
import { normalizeTicket } from '../normalizers/ticketNormalizers'

const
  KEY_PATH = config.base + config.gateWays.searchKey,
  TICKETS_PATH = config.base + config.gateWays.tickets

const
  fetchTicketsSearchId = async (): Promise<string> => {
    const { searchId } = await fetchJSON(KEY_PATH)

    return searchId
  }

export const pollTickets = async (process: (tickets: ITicket[]) => any) => {
  const
    searchId = await fetchTicketsSearchId(),
    path = `${TICKETS_PATH}?searchId=${searchId}`

  let stop = false

  while (!stop) try {
    const
      result = await fetchJSON(path),
      rawTickets = result.tickets,
      normalized = rawTickets.map(normalizeTicket)

    process(normalized)
    stop = result.stop
  } catch (error) {
    console.warn(error)
  }
}

export const getImage = (carrierCode: string) => `//pics.avs.io/99/36/${carrierCode}.png`
