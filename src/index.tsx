import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/index.scss'
import App from './App'
import store from './store'
import { fetchTickets } from './api/tickets'
import init from './store/initialize'

const
  render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById('root'))
  }

fetchTickets()
  .catch(console.warn)

init(store.getState())
store.subscribe(render)

render()
