import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import { translationsInitialize } from './services/translation'

translationsInitialize('ru-RU')

ReactDOM.render(<App/>, document.getElementById('root'))
