import React, { useState } from 'react'

import Checkbox from '../../../components/ui/forms/Checkbox'
import FiltersSection from '../../../components/ui/forms/FiltersSection'
import { useTranslation } from 'react-i18next'

const Sidebar: React.FC = () => {
  const
    [checked, setChecked] = useState(false),
    [t] = useTranslation()

  return (
    <FiltersSection title='Количество пересадок'>
      <Checkbox checked={checked} onChange={(value) => {
        setChecked((value))
      }}>
        {t('findTickets.transfers.all')}
      </Checkbox>

      <Checkbox tabIndex={-1} checked={checked} onChange={(value) => {
        console.log(value)
        setChecked((value))
      }}>
        {t('findTickets.transfers.labelWithout')}
      </Checkbox>

      <Checkbox checked={checked} onChange={(value) => {
        console.log(value)
        setChecked((value))
      }}>
        {t('findTickets.transfers.label', { count: 1 })}
      </Checkbox>

      <Checkbox checked={checked} onChange={(value) => {
        console.log(value)
        setChecked((value))
      }}>
        {t('findTickets.transfers.label', { count: 2 })}
      </Checkbox>

      <Checkbox checked={checked} onChange={(value) => {
        console.log(value)
        setChecked((value))
      }}>
        {t('findTickets.transfers.label', { count: 3 })}
      </Checkbox>

      <Checkbox checked={checked} onChange={(value) => {
        console.log(value)
        setChecked((value))
      }}>
        {t('findTickets.transfers.label', { count: 4 })}
      </Checkbox>

      <Checkbox checked={checked} onChange={(value) => {
        console.log(value)
        setChecked((value))
      }}>
        {t('findTickets.transfers.label', { count: 5 })}
      </Checkbox>
    </FiltersSection>
  )
}

export default Sidebar
