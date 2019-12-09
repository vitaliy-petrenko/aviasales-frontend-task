import { formatDurationFromMinutes, formatDurationInHours, formatFromTo } from '../formatters'

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

const hoursFormat = {
  days: 0,
  hours: 0,
}

const minutesFormat = {
  ...hoursFormat,
  minutes: 0,
}

describe('format duration in hours', () => {
  it('zero', () => {
    expect(formatDurationInHours(0)).toEqual({ ...hoursFormat })
  })

  it('< 24', () => {
    expect(formatDurationInHours(1)).toEqual({ ...hoursFormat, hours: 1 })
  })

  it('24', () => {
    expect(formatDurationInHours(24)).toEqual({ ...hoursFormat, days: 1 })
  })

  it('> 24', () => {
    expect(formatDurationInHours(25)).toEqual({ days: 1, hours: 1 })
  })
})

describe('format duration in minutes', () => {
  it('zero', () => {
    expect(formatDurationFromMinutes(0)).toEqual({ ...minutesFormat })
  })

  it('< 60', () => {
    expect(formatDurationFromMinutes(30)).toEqual({ ...minutesFormat, minutes: 30 })
  })

  it('60', () => {
    expect(formatDurationFromMinutes(60)).toEqual({ ...minutesFormat, hours: 1 })
  })

  it('> 60', () => {
    expect(formatDurationFromMinutes(61)).toEqual({ ...minutesFormat, hours: 1, minutes: 1 })
  })
})
