import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'

import './Ticket.scss'
import Price from '../ui/common/Price'
import { useTranslation } from 'react-i18next'
import { getImage } from '../../api/ticketApi'
import { formatFromTo } from '../../helpers/formatters'
import Duration from '../ui/common/Duration'

interface IProps {
  ticket: ITicket
}

const
  getRangeFromDateAndDuration = (date: string, duration: number): string => formatFromTo([
    moment(date).format('LT'),
    moment(date).add(duration, 'minutes').format('LT'),
  ])

const Ticket: React.FC<IProps> = ({ ticket }) => {
  const
    [t] = useTranslation()

  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <div className='ticket__row'>
          <div className='ticket__col'>
            <div className='ticket-price'><Price value={ticket.price}/></div>
          </div>
          <div className='ticket__col'>
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
          {ticket.segments.map(({ id, date, destination, duration, origin, stops }) => (
            <div className='ticket__row' key={id}>
              <div className='ticket__col'>
                <SegmentItem label={formatFromTo([origin, destination])}>
                  {getRangeFromDateAndDuration(date, duration)}
                </SegmentItem>
              </div>
              <div className='ticket__col'>
                <SegmentItem label={t('tickets.duration')}>
                  <Duration duration={duration}/>
                </SegmentItem>
              </div>
              <div className='ticket__col'>
                {!stops.length ? (
                  <SegmentItem label={t('findTickets.transfers.labelZero')}/>
                ) : (
                  <SegmentItem label={t('findTickets.transfers.label', { count: stops.length })}>
                    {formatFromTo(stops)}
                  </SegmentItem>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ISegmentProps {
  label: string
}

const SegmentItem: React.FC<ISegmentProps> = ({ label, children }) => (
  <div className='ticket-segment-item'>
    <div className='ticket-segment-item__label'>{label}</div>
    <div className='ticket-segment-item__value'>{children}</div>
  </div>
)

const TLoading: React.FC = () => <div className='ticket-loading animated-background-loading'/>

export const TicketLoading: React.FC = () => (
  <div className='ticket'>
    <div className='ticket__header'>
      <div className='ticket__row'>
        <div className='ticket__col'><TLoading/></div>
        <div className='ticket__col'><TLoading/></div>
      </div>
    </div>
    <div className='ticket__body'>
      <div className='ticket-segments'>
        <div className='ticket__row'>
          <div className='ticket__col'><TLoading/><TLoading/></div>
          <div className='ticket__col'><TLoading/><TLoading/></div>
          <div className='ticket__col'><TLoading/><TLoading/></div>
        </div>
      </div>
    </div>
  </div>
)

export default Ticket
