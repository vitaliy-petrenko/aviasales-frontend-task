import React from 'react'
import Checkbox from '../../../components/ui/forms/Checkbox'
import FiltersSection from '../../../components/ui/forms/FiltersSection'
import { useTranslation } from 'react-i18next'
import { toggleInArray } from '../../../helpers/misc'

export interface IProps {
  setSelectedTransfersOptions: (options: number[]) => TActionFilterTransfers,
  filters: ITicketFiltersState
}

const Sidebar: React.FC<IProps> = ({ setSelectedTransfersOptions, filters }) => {
  const
    [t] = useTranslation(),
    { selected, available } = filters.transfers,
    isAllSelected = available.length === selected.length,

    onToggleAll = () => setSelectedTransfersOptions(selected.length && isAllSelected ? [] : [...available]),

    onToggle = (option: number) => setSelectedTransfersOptions(toggleInArray(selected, option))

  return (
    <FiltersSection title='Количество пересадок'>
      <Checkbox
        checked={isAllSelected}
        onChange={onToggleAll}
      >
        {t('findTickets.transfers.all')}
      </Checkbox>

      {
        available.map(option => (
          <Checkbox
            key={option}
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
          >
            {t(`findTickets.transfers.label${option === 0 ? 'Zero' : ''}`, { count: option })}
          </Checkbox>
        ))
      }
    </FiltersSection>
  )
}

export default Sidebar
