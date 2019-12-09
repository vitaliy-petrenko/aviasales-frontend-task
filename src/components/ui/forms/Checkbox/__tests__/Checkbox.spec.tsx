import React from 'react'
import Checkbox from '../index'
import { shallow } from 'enzyme'

describe('Checkbox component', () => {
  const
    component = shallow(<Checkbox/>),
    findInput = () => component.find({ type: 'checkbox' })

  it('renders properly', () => {
    expect(component).toMatchSnapshot()
  })

  it('has input', () => {
    expect(findInput()).toHaveLength(1)
  })

  it('can be unchecked', () => {
    expect(findInput().props().checked).toBe(false)
  })

  it('can be checked', () => {
    component.setProps({ checked: true })

    expect(findInput().props().checked).toBe(true)
  })

  it('calls onChange', () => {
    const onChange = jest.fn()

    component.setProps({ onChange })
    findInput().simulate('change')
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
