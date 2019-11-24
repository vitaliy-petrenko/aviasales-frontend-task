import React from 'react'
import './FindTickets.scss'
import PlaneLogo from '../../components/PlaneLogo'
import Layout from '../../components/ui/Layout'
import Sidebar from './Sidebar'
import TicketsList from './TicketsList'
import Tabs from './SortTabs'
import { ITicket, ITicketsFetchingStatuses } from '../../store/findTickets/types'

export interface IProps {
  fetchTickets: () => any
  clearTickets: () => any
  fetchingStatuses: ITicketsFetchingStatuses
  tickets: ITicket[]
}

class FindTickets extends React.Component<IProps> {
  componentDidMount(): void {
    this.props.fetchTickets()
  }

  render() {
    const { fetchTickets, fetchingStatuses, tickets } = this.props

    return (
      <div className='find-tickets'>
        <div className='find-tickets__top'>
          <PlaneLogo animated={fetchingStatuses.isFetching}/>
        </div>

        <div className='find-tickets__body'>
          <Layout Sidebar={
            Sidebar
          }>
            <div className='find-tickets__row'>
              <Tabs/>
            </div>
            <div className='find-tickets__row'>
              <TicketsList
                fetchingStatuses={fetchingStatuses}
                fetchTickets={fetchTickets}
                tickets={tickets}
              />
            </div>
          </Layout>
        </div>
      </div>
    )
  }
}


export default FindTickets
