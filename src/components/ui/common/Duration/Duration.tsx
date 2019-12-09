import React from 'react'
import { formatDurationFromMinutes, TDurationParsed } from '../../../../helpers/formatters'
import { useTranslation } from 'react-i18next'

export enum EFormatFrom { minutes }

interface IProps {
  from?: EFormatFrom,
  duration: number
}

interface IFormatArgs {
  from: EFormatFrom,
  duration: number,
  t: (key: string) => string
}

const format = ({ duration, t, from }: IFormatArgs): string => {
  let formatter

  if (from === EFormatFrom.minutes) {
    formatter = formatDurationFromMinutes
  } else {
    //todo: add another formatter according to the 'from' attribute
    formatter = formatDurationFromMinutes
  }

  const
    { days, hours, minutes }: TDurationParsed = formatter(duration),
    result: string[] = []

  if (days) {
    result.push(`${days}${t('labels.time.daysShort')}`)}


  if (hours || days) {
    result.push(`${hours}${t('labels.time.hoursShort')}`)
  }

  if (minutes || hours) {
    result.push(`${minutes}${t('labels.time.minutesShort')}`)
  }

  return result.join(' ')
}

const Duration: React.FC<IProps> = ({ from = EFormatFrom.minutes, duration }) => {
  const [t] = useTranslation()

  return <>{format({ duration, t, from })}</>
}

export default Duration
