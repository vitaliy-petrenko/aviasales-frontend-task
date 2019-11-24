export const formatFromTo = (arr: Array<string | number>): string => arr.join(' - ')

export const formatDateRange = (date: number | string, duration: number) => `${date} - ${duration}`

export type TDurationParsed = {
  days?: number
  hours?: number
  minutes?: number
}

export const formatDurationInHours = (hours: number): TDurationParsed => {
  const
    restHours = hours % 24,
    days = (hours - restHours) / 24

  return {
    days,
    hours: restHours,
  }
}

export const formatDurationFromMinutes = (minutes: number): TDurationParsed => {
  const
    restMinutes = minutes % 60,
    hours = (minutes - restMinutes) / 60

  return {
    ...formatDurationInHours(hours),
    minutes: restMinutes,
  }
}
