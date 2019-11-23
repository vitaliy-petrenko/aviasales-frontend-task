import React from 'react'

interface IProps {
  value: number
}

const format = (value: number): string => value.toLocaleString()

const Price: React.FC<IProps> = ({ value }) => {
  //todo: move to store
  const currency = 'Р'

  return (
    <>{`${format(value)} ${currency}`}</>
  )
}

export default Price
