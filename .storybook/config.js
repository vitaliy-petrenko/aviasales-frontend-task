import { configure } from '@storybook/react'
import '../src/styles/storybook.scss'

const req = require.context('../src/components/', true, /\.stories.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
