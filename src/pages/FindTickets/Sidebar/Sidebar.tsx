import React from 'react'
import Checkbox from '../../../components/ui/forms/Checkbox'
import FiltersSection from '../../../components/ui/forms/FiltersSection'
import { Trans, useTranslation } from 'react-i18next'
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
          <CheckboxFilter
            key={option}
            option={option}
            checked={selected.includes(option)}
            onToggle={onToggle}
          />
        ))
      }
    </FiltersSection>
  )
}

interface IFilterCheckBoxProps {
  option: number
  checked: boolean

  onToggle(value: number): void
}

class CheckboxFilter extends React.Component<IFilterCheckBoxProps> {
  onChange = () => this.props.onToggle(this.props.option)

  shouldComponentUpdate(nextProps: Readonly<IFilterCheckBoxProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    return this.props.checked !== nextProps.checked
  }

  render() {
    const
      { option, checked } = this.props,
      translation = `findTickets.transfers.label${option === 0 ? 'Zero' : ''}`

    return (
      <Checkbox
        key={option}
        checked={checked}
        onChange={this.onChange}
      >
        <Trans count={option}>{translation}</Trans>
      </Checkbox>
    )
  }
}

export default Sidebar
