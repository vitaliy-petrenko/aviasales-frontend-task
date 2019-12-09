import React, { useState } from 'react'
import Checkbox from './Checkbox'
import { storiesOf } from '@storybook/react'
import results from '../../../../../.jest-test-results.json'
import { withTests } from '@storybook/addon-jest'

const params = {
  jest: ['ButtonGroup.spec.tsx'],
}

storiesOf('Checkbox', module)
  .addDecorator(withTests({ results }))
  .add('Checkbox', () => {
      const
        [checked, setChecked] = useState(true),
        onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked)
        }

      return (
        <Checkbox checked={checked} onChange={onChange}>label</Checkbox>
      )
    }, params
  )

