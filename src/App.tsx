import React from 'react'
import NotFound from './pages/NotFound'
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
      <Route exact path='/not-found'>
        <NotFound/>
      </Route>
      <Route path='*'>
        <Redirect to='/not-found'/>
      </Route>
    </Switch>
  </Router>
)

export default App
