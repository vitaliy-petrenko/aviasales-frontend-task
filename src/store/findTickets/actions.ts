import { createAction } from '@reduxjs/toolkit'

export const fetchTicketsRequest = createAction<never>(`TICKETS_FETCH_REQUESTED`)

export const clearFindTickets = createAction(`TICKETS_CLEAR`)
