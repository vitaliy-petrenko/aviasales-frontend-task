import { IBaseTicket, IBaseTicketSegment } from '../store/findTickets/types'

export interface IRawTicketSegment extends IBaseTicketSegment{

}

export interface IRawTicket extends IBaseTicket<IRawTicketSegment> {

}
