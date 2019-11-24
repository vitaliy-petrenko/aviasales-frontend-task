import React from 'react'
import './FindTickets.scss'
import PlaneLogo from './PlaneLogo'
import Layout from '../../components/ui/Layout'
import Sidebar from './Sidebar'
import TicketsList from './TicketsList'
import Tabs from './SortTabs'

const FindTickets: React.FC = () => (
  <div className='find-tickets'>
    <div className='find-tickets__top'>
      <PlaneLogo/>
    </div>

    <div className='find-tickets__body'>
      <Layout Sidebar={
        Sidebar
      }>
        <div className='find-tickets__row'>
          <Tabs/>
        </div>
        <div className='find-tickets__row'>
          <TicketsList/>
        </div>
      </Layout>
    </div>
  </div>
)

export default FindTickets
