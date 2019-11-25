import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/index.scss'
import App from './App'
import store from './store'
import init from './store/initialize'
import * as serviceWorker from './serviceWorker'

const
  render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById('root'))
  }

init(store.getState())
store.subscribe(render)

render()

serviceWorker.unregister()
