import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/ui/forms/Button'
import ButtonGroup from '../../../components/ui/forms/ButtonGroup'
import { ETicketsSortBy } from '../../../store/findTickets/reducers'

export interface IProps {
  sortBy: TTicketsSortBy,
  selectSortBy: (count: TTicketsSortBy) => TActionSortBy
}

const sortByVariants = [ETicketsSortBy.price, ETicketsSortBy.duration]

const SortTabs: React.FC<IProps> = ({ sortBy, selectSortBy }) => {
  const [t] = useTranslation()

  return (
    <ButtonGroup>
      {
        sortByVariants.map(variant => {
          const isActive = sortBy === variant

          return (
            <Button
              div
              key={variant}
              type={isActive ? 'primary' : 'secondary'}
              size='lg'
              onClick={() => !isActive && selectSortBy(variant)}
            >
              {t(`findTickets.tabs.${variant}`)}
            </Button>
          )
        })
      }
    </ButtonGroup>
  )
}

export default SortTabs
