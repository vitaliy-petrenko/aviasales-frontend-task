import React from 'react'
import './Ticket.scss'
import Price from '../ui/common/Price'
import { useTranslation } from 'react-i18next'

const Ticket: React.FC = () => {
  const [t] = useTranslation()

  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <div className='ticket__row'>
          <div className='ticket__col'>
            <div className='ticket-price'><Price value={13400}/></div>
          </div>
          <div className='ticket__col'>
            <div className='ticket-company-logo'>
              <img src='/test.png' alt=''/>
            </div>
          </div>
        </div>
      </div>
      <div className='ticket__body'>
        <div className='ticket-segments'>
          <div className='ticket__row'>
            <div className='ticket__col'>
              <SegmentItem label={'Label'} value={'11:20 - 10:50'}/>
            </div>
            <div className='ticket__col'>
              <SegmentItem label={t('tickets.travelTime')} value={'Value'}/>
            </div>
            <div className='ticket__col'>
              <SegmentItem label={t('findTickets.transfers.label', { count: 2 })} value={'Value'}/>
            </div>
          </div>

          <div className='ticket__row'>
            <div className='ticket__col'>
              <SegmentItem label={'Label'} value={'Value'}/>
            </div>
            <div className='ticket__col'>
              <SegmentItem label={t('tickets.travelTime')} value={'Value'}/>
            </div>
            <div className='ticket__col'>
              <SegmentItem label={t('findTickets.transfers.label', { count: 1 })} value={'Value'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ISegmentProps {
  label: string
  value?: string
}

const SegmentItem: React.FC<ISegmentProps> = ({ label, value, children }) => (
  <div className='ticket-segment-item'>
    <div className='ticket-segment-item__label'>{label}</div>
    <div className='ticket-segment-item__value'>{value}</div>
    {children}
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
