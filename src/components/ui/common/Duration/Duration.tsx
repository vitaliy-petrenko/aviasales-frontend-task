import React from 'react'
import { formatDurationFromMinutes, TDurationParsed } from '../../../../helpers/formatters'
import { useTranslation } from 'react-i18next'

interface IProps {
  from?: string,
  duration: number
}

interface IFormatArgs {
  duration: number,
  from?: string,
  t: (key: string) => string
}

const
  format = ({ duration, t }: IFormatArgs): string => {
    //todo: add another formatter according to the 'from' attribute
    let formatter = formatDurationFromMinutes

    const
      { days, hours, minutes }: TDurationParsed = formatter(duration),
      result: string[] = []

    if (days) {
      result.push(`${days}${t('labels.time.daysShort')}`)
    }

    if (hours) {
      result.push(`${hours}${t('labels.time.hoursShort')}`)
    }

    if (minutes) {
      result.push(`${minutes}${t('labels.time.minutesShort')}`)
    }

    return result.join(' ')
  }

const Duration: React.FC<IProps> = ({ from = 'minutes', duration }) => {
  const [t] = useTranslation()

  return <>{format({ duration, t, from })}</>
}

export default Duration
