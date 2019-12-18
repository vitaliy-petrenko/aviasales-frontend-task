import { formatFromTo, prependZeroToTimeValue, parseDurationFromHours, parseDurationFromMinutes } from '../formatters'

describe('format from to', () => {
  it('zero', () => {
    expect(formatFromTo([])).toBe('')
  })

  it('1 element', () => {
    expect(formatFromTo([1])).toBe('1')
  })

  it('multiple elements', () => {
    expect(formatFromTo([1, 2, 3])).toBe('1 - 2 - 3')
  })
})

const duration = {
  days: 0,
  hours: 0,
  minutes: 0,
}

describe('parse duration in hours', () => {
  it('zero', () => {
    expect(parseDurationFromHours(0)).toEqual({ ...duration })
  })

  it('< 24', () => {
    expect(parseDurationFromHours(1)).toEqual({ ...duration, hours: 1 })
  })

  it('24', () => {
    expect(parseDurationFromHours(24)).toEqual({ ...duration, days: 1 })
  })

  it('> 24', () => {
    expect(parseDurationFromHours(25)).toEqual({ days: 1, hours: 1, minutes: 0 })
  })
})

describe('parse duration in minutes', () => {
  it('zero', () => {
    expect(parseDurationFromMinutes(0)).toEqual({ ...duration })
  })

  it('< 60', () => {
    expect(parseDurationFromMinutes(30)).toEqual({ ...duration, minutes: 30 })
  })

  it('60', () => {
    expect(parseDurationFromMinutes(60)).toEqual({ ...duration, hours: 1 })
  })

  it('> 60', () => {
    expect(parseDurationFromMinutes(61)).toEqual({ ...duration, hours: 1, minutes: 1 })
  })
})

describe('prepend zero to time value', () => {
  it('zero', () => {
    expect(prependZeroToTimeValue(0)).toEqual('00')
  })

  it('one symbol', () => {
    expect(prependZeroToTimeValue(9)).toEqual('09')
  })

  it('two symbols', () => {
    expect(prependZeroToTimeValue(19)).toEqual('19')
  })
})
