import React from 'react'
import ButtonGroup from '../../../../components/ui/forms/ButtonGroup'
import { shallow } from 'enzyme'

describe('ButtonGroup component', () => {
  const component = shallow(<ButtonGroup/>)

  it('renders properly', () => {
    expect(component).toMatchSnapshot()
  })
})
