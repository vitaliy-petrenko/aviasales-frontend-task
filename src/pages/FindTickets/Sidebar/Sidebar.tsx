import React from 'react'
import Checkbox from '../../../components/ui/forms/Checkbox'
import FiltersSection from '../../../components/ui/forms/FiltersSection'
import { useTranslation } from 'react-i18next'
import { ITicketFilters, TActionFilterTransfersToggleOption } from '../../../store/findTickets/types'
import { orderedArray } from '../../../helpers/misc'

export interface IProps {
  toggleTransfersOption: (count: number) => TActionFilterTransfersToggleOption,
  filters: ITicketFilters
}

const Sidebar: React.FC<IProps> = ({ toggleTransfersOption, filters }) => {
  const
    [t] = useTranslation(),
    { options, maxTransfersCount } = filters.transfers

  return (
    <FiltersSection title='Количество пересадок'>
      <Checkbox
        checked={maxTransfersCount === options.length}
        onChange={() => toggleTransfersOption(-1)}
      >
        {t('findTickets.transfers.all')}
      </Checkbox>

      {
        orderedArray(maxTransfersCount).map(count => (
          <Checkbox
            key={count}
            checked={options.includes(count)}
            onChange={() => toggleTransfersOption(count)}
          >
            {t(`findTickets.transfers.label${count === 0 ? 'Zero' : ''}`, { count })}
          </Checkbox>
        ))
      }
    </FiltersSection>
  )
}

export default Sidebar
