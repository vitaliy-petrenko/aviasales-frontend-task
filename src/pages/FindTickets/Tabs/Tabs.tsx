import React from 'react'
import Button from '../../../components/ui/forms/Button'
import ButtonGroup from '../../../components/ui/forms/ButtonGroup'
import { useTranslation } from 'react-i18next'

const Tabs: React.FC = () => {
  const [t] = useTranslation()

  return (
    <ButtonGroup>
      <Button type='secondary' size='lg'>
        {t('findTickets.tabs.byPrice')}
      </Button>

      <Button size='lg'>
        {t('findTickets.tabs.byTime')}
      </Button>
    </ButtonGroup>
  )
}

export default Tabs
