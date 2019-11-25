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

const withInterval = (fn: () => boolean, delay: number) => {
  const run = () => {
    setTimeout(() => {
      const result = fn()

      if (!result) {
        run()
      }
    }, delay)
  }

  run()
}

export const pollTickets = async (process: (tickets: ITicket[]) => any) => {
  let
    stop = false,
    rawTickets: IRawTicket[] = []

  const
    searchId = await fetchTicketsSearchId(),
    path = `${TICKETS_PATH}?searchId=${searchId}`

  withInterval(() => {
    if (rawTickets.length) {
      const normalized = rawTickets.map(normalizeTicket)

      process(normalized)
      rawTickets = []
    }

    return stop
  }, 500)

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
