import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  App,
} from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={App}>
        {/* <IndexRoute component={Home} /> */}
        {/* <route path='contact'>
          <IndexRoute component={Contact} />
        </route> */}
      </Router>
    </Router>
  )
}
