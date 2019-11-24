import React from 'react'
import { useTranslation } from 'react-i18next'
import './Error.scss'

const Error: React.FC = ({ children }) => {
  const [t] = useTranslation()
  return (
    <div className='error'>
      <div className="error__message">
        {t('commonMessages.error')}
      </div>

      {children && (
        <div className="error__body">
          {children}
        </div>
      )}
    </div>
  )
}

export default Error
