import React from 'react'
import { ReactComponent as ICheck } from '../../../../assets/icons/check.svg'
import './Checkbox.scss'

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange(value: boolean): void

  type?: string
}

const Checkbox: React.FC<IProps> = ({ children, onChange, type = 'checkbox', ...rest }) => {
  return (
    <label className='checkbox'>
      <input type={type} onChange={e => onChange(e.target.checked)} {...rest} />
      <span className='checkbox__icon'><ICheck/></span>

      <span className='checkbox__label'>
        {children}
      </span>
    </label>
  )
}

export default Checkbox
