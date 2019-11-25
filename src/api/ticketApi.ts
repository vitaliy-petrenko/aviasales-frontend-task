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
  let
    interval: number,
    stop = false,
    rawTickets: IRawTicket[] = []

  const
    processInterval = 400,
    searchId = await fetchTicketsSearchId(),
    path = `${TICKETS_PATH}?searchId=${searchId}`,

    runProcess = () => {
      if (rawTickets.length) {
        const normalized = rawTickets.map(normalizeTicket)

        process(normalized)
        rawTickets = []
      }

      if (stop) {
        clearInterval(interval)
      }
    }

  interval = setInterval(runProcess, processInterval) as any

  while (!stop) try {
    const
      result = await fetchJSON(path)

    stop = result.stop

    rawTickets.push(...result.tickets)
  } catch (error) {
    console.warn(error)
  }
}

export const getImage = (carrierCode: string) => `//pics.avs.io/99/36/${carrierCode}.png`
