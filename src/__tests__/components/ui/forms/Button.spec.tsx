import React from 'react'
import Button, { getButtonClassName } from '../../../../components/ui/forms/Button/Button'
import { shallow, ShallowWrapper } from 'enzyme'

describe('Button component', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<Button/>)
  })

  it('renders properly', () => {
    expect(component).toMatchSnapshot()
  })

  it('button tag by default', () => {
    expect(component.name()).toBe('button')
  })

  it('can be div', () => {
    component.setProps({ div: true })
    expect(component.name()).toBe('div')
  })

  it('can be link', () => {
    component.setProps({ a: true })
    expect(component.name()).toBe('a')
  })

  it('calls onClick', () => {
    const onClick = jest.fn()

    component.setProps({ onClick }).simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('button classNames', () => {
  it('adding type', () => {
    expect(getButtonClassName({ type: 'a' })).toBe('btn btn--a')
  })

  it('adding size', () => {
    expect(getButtonClassName({ size: 'a' })).toBe('btn btn--a')
  })

  it('adding block', () => {
    expect(getButtonClassName({ block: true })).toBe('btn btn--block')
  })
})
