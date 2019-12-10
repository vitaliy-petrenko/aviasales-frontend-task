import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import { storiesOf } from '@storybook/react'
import results from '../../../../../.jest-test-results.json'
import { withTests } from '@storybook/addon-jest'


export const button = () => <Button onClick={action('clicked')}>button</Button>

export const div = () => <Button div onClick={action('clicked')}>div</Button>

export const a = () => (
  <Button
    a
    href='https://vitaliy-petrenko.github.io/aviasales-frontend-task'
    target='_blank'
    onClick={action('clicked')}
  >
    link
  </Button>
)

export const block = () => <Button block onClick={action('clicked')}>div</Button>

export const large = () => <Button size='lg' onClick={action('clicked')}>large</Button>

// export const small = () => <Button size='sm' onClick={action('clicked')}>large</Button>

export const secondary = () => <Button type='secondary' onClick={action('clicked')}>secondary</Button>

const params = {
  jest: ['Button.spec.tsx'],
}

storiesOf('Button', module)
  .addDecorator(withTests({ results }))
  .add('button', button, params)
  .add('secondary', secondary, params)
  .add('div', div, params)
  .add('a', a, params)
  .add('block', block, params)
  .add('large', large, params)
// .add('small', small)

