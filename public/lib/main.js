// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import AppController from "./components/AppController";
//
// ReactDOM.render(<AppController />, document.getElementById("react"));
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import List from './components/AppController'
import UserPage from './components/UserPage'

render((
  <Router history={hashHistory}>
    <Route path="/list" component={List}/>
    <Route path="/user" component={UserPage}/>
  </Router>
), document.getElementById('react'))
