// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import AppController from "./components/AppController";
//
// ReactDOM.render(<AppController />, document.getElementById("react"));
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import List from './components/AppController'
import UserPage from './components/UserPage'

render((
  <Router history={browserHistory}>
    <Route path="/" component={List}/>
    {/* add the routes here */}
    <Route path="/user" component={UserPage}/>
  </Router>
), document.getElementById('react'))
