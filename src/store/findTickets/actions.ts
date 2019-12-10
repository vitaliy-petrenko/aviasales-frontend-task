import { createAction } from '@reduxjs/toolkit'

export const fetchTicketsRequest = createAction(`TICKETS_FETCH_REQUESTED`)

export const clearFindTickets = createAction(`TICKETS_CLEAR`)
