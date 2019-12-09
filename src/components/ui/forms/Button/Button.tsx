import React from 'react'
import './Button.scss'
import { makeBemClassNames } from '../../../../helpers/bem'

interface ButtonClassProps {
  type?: string
  isLoading?: boolean
  isDisabled?: boolean
  size?: string
  block?: boolean
}

interface IProps extends ButtonClassProps {
  text?: string
  div?: boolean
  a?: boolean
  href?: string
  target?: string
  onClick?: (e: React.MouseEvent) => any
}

const BASE_CLASS_NAME = 'btn'

const Button: React.FC<IProps> =
  ({ div, a, type = 'primary', size, isLoading, isDisabled, block, text, children, ...props }) => {
    const
      className = getButtonClassName({ type, size, isLoading, isDisabled, block }),
      Tag = div ? 'div' : a ? 'a' : 'button'

    return (
      <Tag className={className} {...props}>
        {text}
        {children}
      </Tag>
    )
  }

export const getButtonClassName = ({ type, size, isLoading, block, isDisabled }: ButtonClassProps) => {
  const modifiers = []

  if (type) modifiers.push(type)
  if (size) modifiers.push(size)
  if (block) modifiers.push('block')

  return makeBemClassNames(BASE_CLASS_NAME, { isLoading, isDisabled, modifiers },)
}

export default Button
