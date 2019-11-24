import React from 'react'
import Ticket, { TicketLoading } from '../../../components/Ticket/Ticket'
import { IProps } from '../FindTickets'
import FadeIn from '../../../components/ui/common/FadeIn'
import { useTranslation } from 'react-i18next'

const TicketsList: React.FC<Omit<IProps, 'clearTickets'>> = ({ fetchTickets, fetchingStatuses, tickets }) => (
  <div className='tickets-list'>
    {fetchingStatuses.isFetching && (
      <Loading/>
    )}

    {
      tickets.map(ticket => (
        <div className='tickets-list__item' key={ticket.id}>
          <FadeIn initialX={8} duration={.2}>
            <Ticket ticket={ticket}/>
          </FadeIn>
        </div>
      ))
    }

    {!tickets.length && !fetchingStatuses.isFetching && (
      <div className='tickets-list__item'>
        <TicketsNotFound/>
      </div>
    )}

    {fetchingStatuses.isError && (
      <div className='tickets-list__item'>
        'Error'
      </div>
    )}
  </div>
)

const Loading: React.FC = () => (
  <>
    <div className='tickets-list__item'><TicketLoading/></div>
    <div className='tickets-list__item'><TicketLoading/></div>
    <div className='tickets-list__item'><TicketLoading/></div>
  </>
)

const TicketsNotFound: React.FC = () => {
  const [t] = useTranslation()

  return (
    <div className='tickets-list-not-found'>
      {t('tickets.notFound')}
    </div>
  )
}

export default TicketsList
