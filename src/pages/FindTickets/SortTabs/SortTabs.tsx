import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/ui/forms/Button'
import ButtonGroup from '../../../components/ui/forms/ButtonGroup'
import { ETicketsSortBy } from '../../../store/findTickets/reducers'

export interface IProps {
  sortBy: TTicketsSortByState,
  selectSortBy: (count: TTicketsSortByState) => TActionSortBy
}

const SortTabs: React.FC<IProps> = ({ sortBy, selectSortBy }) => {
  const
    [t] = useTranslation(),
    sortByPriceIsActive = sortBy === ETicketsSortBy.price,
    selectSortByPrice = () => !sortByPriceIsActive && selectSortBy(ETicketsSortBy.price),
    selectSortByDuration = () => sortByPriceIsActive && selectSortBy(ETicketsSortBy.duration)

  return (
    <ButtonGroup>
      <Button
        div
        type={sortByPriceIsActive ? 'primary' : 'secondary'}
        size='lg'
        onClick={selectSortByPrice}
      >
        {t(`findTickets.tabs.${ETicketsSortBy.price}`)}
      </Button>

      <Button
        div
        type={!sortByPriceIsActive ? 'primary' : 'secondary'}
        size='lg'
        onClick={selectSortByDuration}
      >
        {t(`findTickets.tabs.${ETicketsSortBy.duration}`)}
      </Button>
    </ButtonGroup>
  )
}

export default SortTabs
