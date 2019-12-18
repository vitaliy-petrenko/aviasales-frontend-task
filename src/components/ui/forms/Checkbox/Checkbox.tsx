import React from 'react'
import { ReactComponent as ICheck } from '../../../../assets/icons/check.svg'
import './Checkbox.scss'

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> =
  ({ children, onChange, type = 'checkbox', checked = false }) => {
    return (
      <label className='checkbox'>
        <input type={type} onChange={onChange} checked={checked}/>
        <span className='checkbox__icon'><ICheck/></span>

        <span className='checkbox__label'>
        {children}
      </span>
      </label>
    )
  }

export default Checkbox
