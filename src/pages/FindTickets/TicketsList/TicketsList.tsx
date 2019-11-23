import React from 'react'
import Ticket, { TicketLoading } from '../../../components/Ticket/Ticket'
import FadeIn from '../../../components/ui/common/FadeIn'
import TicketsNotFound from '../../../components/TicketsNotFound'

const TicketsList: React.FC = () => {
  return (
    <div className='find-tickets-list'>
      <div className="find-tickets-list__item">
        <TicketsNotFound/>
      </div>

      <div className='find-tickets-list__item'>
        <TicketLoading/>
      </div>

      <FadeIn className='find-tickets-list__item'>
        <Ticket/>
      </FadeIn>
    </div>
  )
}

export default TicketsList
