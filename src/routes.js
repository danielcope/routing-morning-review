import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Profile from './components/Profile'
import Landing from './components/Landing'



export default (
  <Switch>
    <Route exact path='/' component={Landing}></Route>
    <Route path='/meet-me/:first/:last' component={Profile}></Route>
  </Switch>
)