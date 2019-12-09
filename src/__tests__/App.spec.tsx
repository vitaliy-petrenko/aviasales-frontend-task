import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

describe('App', () => {
  const component = shallow(<App/>)

  it('renders properly', () => {
    expect(component).toMatchSnapshot()
  })
})
