import React from 'react'
import './TicketsNotFound.scss'
import { useTranslation } from 'react-i18next'

const TicketsNotFound: React.FC = () => {
  const [t] = useTranslation()

  return (
    <div className="find-tickets-list__not-found">
      {t('tickets.notFound')}
    </div>
  )
}

export default TicketsNotFound
