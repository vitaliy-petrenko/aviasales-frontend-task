import React from 'react'
import Ticket, { TicketLoading, TicketSegment, TicketSegmentItem } from '../../components/Ticket/Ticket'
import { shallow } from 'enzyme'
import i18next from 'i18next'

const ticketProps: ITicket = {
  price: 100,
  carrier: 'ua',
  id: 'ticketId',
  segments: [{
    id: 'segmentId',
    origin: 'origin',
    destination: 'destination',
    date: '2019-12-18T06:18:00.000Z',
    stops: ['a', 'b'],
    duration: 60,
  }],
}

describe('Ticket Component', () => {
  describe('Ticket main', () => {
    const component = shallow(<Ticket ticket={ticketProps}/>)

    it('Ticket renders properly', () => {
      expect(component).toMatchSnapshot()
    })

    it('TicketSegment count', () => {
      expect(component.find('TicketSegment')).toHaveLength(ticketProps.segments.length)
    })
  })

  describe('TicketSegment', () => {
    const component = shallow(<TicketSegment {...ticketProps.segments[0]}/>, {
      context: {
        i18: i18next
      }
    })

    it('TicketSegment renders properly', () => {
      expect(component).toMatchSnapshot()
    })

    it('TicketSegmentItem count', () => {
      expect(component.find('TicketSegmentItem')).toHaveLength(3)
    })
  })

  describe('TicketSegmentItem', () => {
    const component = shallow(<TicketSegmentItem label={'label'}>value</TicketSegmentItem>)

    it('TicketSegmentItem renders properly', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('TicketLoading', () => {
    const component = shallow(<TicketLoading/>)

    it('Loading renders properly', () => {
      expect(component).toMatchSnapshot()
    })

    it('Loading has 8 stubs', () => {
      expect(component.find('TLoading')).toHaveLength(8)
    })
  })
})
