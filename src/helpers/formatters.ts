export const formatFromTo = (arr: Array<string | number>): string => arr.join(' - ')

export type TDurationParsed = {
  days: number
  hours: number
  minutes: number
}

export const prependZeroToTimeValue = (time: number): string => `${time >= 10 ? '' : '0'}${time}`

export const parseDurationFromHours = (hours: number): TDurationParsed => {
  const
    restHours = hours % 24,
    days = (hours - restHours) / 24

  return {
    days: days,
    hours: restHours,
    minutes: 0,
  }
}

export const parseDurationFromMinutes = (minutes: number): TDurationParsed => {
  const
    restMinutes = minutes % 60,
    hours = (minutes - restMinutes) / 60

  return {
    ...parseDurationFromHours(hours),
    minutes: restMinutes,
  }
}
