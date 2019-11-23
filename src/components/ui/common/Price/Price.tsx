import React from 'react'
import { TCurrency } from '../../../../store/common/types'

export interface IProps {
  value: number
  currency: TCurrency
}

const format = (value: number): string => value.toLocaleString()

const Price: React.FC<IProps> = ({ value, currency }) => {
  const
    formatted = format(value),
    symbol = currency.symbol

  if (currency.name === 'USD') return (
    <>{`${symbol}${formatted}`}</>
  )

  return (
    <>{`${formatted} ${symbol}`}</>
  )
}

export default Price
