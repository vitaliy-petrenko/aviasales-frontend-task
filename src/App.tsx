import React from 'react'
import DoNotTouchThis from './pages/DoNotTouchThis'
import FindTickets from './pages/FindTickets'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/find-tickets'/>
      </Route>
      <Route exact path='/find-tickets'>
        <FindTickets/>
      </Route>
      <Route exact path='/o-privet'>
        <DoNotTouchThis/>
      </Route>
      <Route path='*'>
        <Redirect to='/o-privet'/>
      </Route>
    </Switch>
  </Router>
)

export default App
