import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  App,
} from './components'
import {
  Map,
  MapFlood,
} from './components/Map'

export default () => {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={App}>
        <IndexRoute component={Map} />
        <route path='flood'>
          <IndexRoute component={MapFlood} />
        </route>
      </Router>
    </Router>
  )
}
