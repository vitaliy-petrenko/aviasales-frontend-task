import React from 'react'
import PlaneLogo from '../../components/PlaneLogo'
import { shallow } from 'enzyme'

describe('PlaneLogo component', () => {
  const component = shallow(<PlaneLogo animated={false}/>)

  it('renders properly', () => {
    expect(component).toMatchSnapshot()
  })
})
