import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import Price from '../ui/common/Price'
import { getImage } from '../../api/ticketApi'
import { formatFromTo } from '../../helpers/formatters'
import Duration from '../ui/common/Duration'
import './Ticket.scss'

interface IProps {
  ticket: ITicket
}

const
  getRangeFromDateAndDuration = (date: string, duration: number): string => formatFromTo([
    moment(date).format('LT'),
    moment(date).add(duration, 'minutes').format('LT'),
  ])

const Ticket: React.FC<IProps> = ({ ticket }) => {
  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <div className='row row--center'>
          <div className='col-xs-8'>
            <div className='ticket-price'><Price value={ticket.price}/></div>
          </div>
          <div className='col-xs-4'>
            <div className='ticket-company-logo'>
              <LazyLoadImage
                alt=''
                src={getImage(ticket.carrier)} // use normal <img> attributes as props
              />
            </div>
          </div>
        </div>
      </div>
      <div className='ticket__body'>
        <div className='ticket-segments'>
          {ticket.segments.map((segment) => (
            <TicketSegment key={segment.id} {...segment}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export const TicketSegment: React.FC<ITicketSegment> = ({ date, destination, duration, origin, stops }) => {
  const [t] = useTranslation()

  return (
    <div className='ticket-segment row'>
      <div className='col-xs-4'>
        <TicketSegmentItem label={formatFromTo([origin, destination])}>
          {getRangeFromDateAndDuration(date, duration)}
        </TicketSegmentItem>
      </div>
      <div className='col-xs-4'>
        <TicketSegmentItem label={t('tickets.duration')}>
          <Duration duration={duration}/>
        </TicketSegmentItem>
      </div>
      <div className='col-xs-4'>
        {!stops.length ? (
          <TicketSegmentItem label={t('findTickets.transfers.labelZero')}/>
        ) : (
          <TicketSegmentItem label={t('findTickets.transfers.label', { count: stops.length })}>
            {formatFromTo(stops)}
          </TicketSegmentItem>
        )}
      </div>
    </div>
  )
}

interface ISegmentItemProps {
  label: string
}

export const TicketSegmentItem: React.FC<ISegmentItemProps> = ({ label, children }) => (
  <div className='ticket-segment-item'>
    <div className='ticket-segment-item__label'>{label}</div>
    <div className='ticket-segment-item__value'>{children}</div>
  </div>
)

const TLoading: React.FC = () => <div className='ticket-loading animated-background-loading'/>

export const TicketLoading: React.FC = () => (
  <div className='ticket'>
    <div className='ticket__header'>
      <div className='row row--center'>
        <div className='col-xs-8'><TLoading/></div>
        <div className='col-xs-4'><TLoading/></div>
      </div>
    </div>
    <div className='ticket__body'>
      <div className='ticket-segments'>
        <div className='ticket-segment row'>
          <div className='col-xs-4'><TLoading/><TLoading/></div>
          <div className='col-xs-4'><TLoading/><TLoading/></div>
          <div className='col-xs-4'><TLoading/><TLoading/></div>
        </div>
      </div>
    </div>
  </div>
)

export default Ticket
