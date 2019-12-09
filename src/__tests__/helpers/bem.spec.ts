import { IBEMProps, makeBemClassNames, makeBEMModifier } from '../../helpers/bem'

describe('bem modifier', () => {
  it('zero', () => {
    expect(makeBEMModifier('base', '')).toBe('')
  })

  it('positive', () => {
    expect(makeBEMModifier('base', 'modifier')).toBe('base--modifier')
  })
})

const bemProps: IBEMProps = {
  isActive: false,
  isLoading: false,
  isDisabled: false,
  modifiers: [],
  mix: []
}

describe('bem class names', () => {
  it('zero', () => {
    expect(makeBemClassNames('base', bemProps)).toBe('base')
  })

  it('is active', () => {
    expect(makeBemClassNames('base', { ...bemProps, isActive: true })).toBe('base is-active')
  })

  it('is loading', () => {
    expect(makeBemClassNames('base', { ...bemProps, isLoading: true })).toBe('base is-loading')
  })

  it('is disabled', () => {
    expect(makeBemClassNames('base', { ...bemProps, isDisabled: true })).toBe('base is-disabled')
  })

  it('all global mixes', () => {
    const globalMixes = makeBemClassNames('base', {
      ...bemProps,
      isActive: true,
      isLoading: true,
      isDisabled: true
    })

    expect(globalMixes).toBe('base is-active is-loading is-disabled')
  })

  it('modifiers', () => {
    expect(makeBemClassNames('base', { ...bemProps, modifiers: ['a', 'b'] })).toBe('base base--a base--b')
  })

  it('mix', () => {
    expect(makeBemClassNames('base', { ...bemProps, mix: ['a', 'b'] })).toBe('base a b')
  })
})
