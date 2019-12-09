import React from 'react'
import ButtonGroup from '../index'
import { shallow } from 'enzyme'

describe('ButtonGroup component', () => {
  const component = shallow(<ButtonGroup/>)

  it('renders properly', () => {
    expect(component).toMatchSnapshot()
  })
})
