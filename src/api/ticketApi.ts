import config from './config'
import { fetchJSON } from '../helpers/fetch'
import { normalizeTicket } from '../normalizers/ticketNormalizers'

const
  KEY_PATH = config.base + config.gateWays.searchKey,
  TICKETS_PATH = config.base + config.gateWays.tickets

export const fetchTicketsSearchId = async () => {
  try {
    const { searchId } = await fetchJSON(KEY_PATH)

    return searchId
  } catch (error) {
    console.warn(error)
    return null
  }
}

export const fetchTickets = async (searchId: string) => {
  const
    path = `${TICKETS_PATH}?searchId=${searchId}`

  try {
    const result = await fetchJSON(path)

    return {
      stop: result.stop,
      tickets: result.tickets.map(normalizeTicket)
    }
  } catch (error) {
    console.warn(error)

    return null;
  }
}

export const getImage = (carrierCode: string) => `//pics.avs.io/99/36/${carrierCode}.png`
