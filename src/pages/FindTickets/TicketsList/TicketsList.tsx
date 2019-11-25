import React from 'react'
import Ticket, { TicketLoading } from '../../../components/Ticket/Ticket'
import FadeIn from '../../../components/ui/common/FadeIn'
import { useTranslation } from 'react-i18next'

export interface IProps {
  statuses: IFetchingStatuses,
  tickets: ITicket[]
}

const TicketsList: React.FC<Omit<IProps, 'isError'>> = ({ statuses, tickets }) => {
  const
    list = tickets.map(ticket => (
      <div className='tickets-list__item' key={ticket.id}>
        <FadeIn initialX={8} duration={.25}>
          <Ticket ticket={ticket}/>
        </FadeIn>
      </div>
    )),
    notFound = !tickets.length && !statuses.isFetching && (
      <div className='tickets-list__item'>
        <TicketsNotFound/>
      </div>
    )


  return (
    <div className='tickets-list'>
      {list}
      {statuses.isFetching && (
        <Loading/>
      )}
      {notFound}
    </div>
  )
}

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
