import React from 'react'
import ButtonGroup from './ButtonGroup'
import { storiesOf } from '@storybook/react'
import results from '../../../../../.jest-test-results.json'
import { withTests } from '@storybook/addon-jest'
import Button from '../Button'
import { action } from '@storybook/addon-actions'

const params = {
  jest: ['ButtonGroup.spec.tsx'],
}

storiesOf('ButtonGroup', module)
  .addDecorator(withTests({ results }))
  .add('ButtonGroup', () => (
      <ButtonGroup>
        <Button div onClick={action('clicked')}>Item</Button>
        <Button div onClick={action('clicked')} type='secondary'>Item</Button>
      </ButtonGroup>
    ), params
  )

