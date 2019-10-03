import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import App from './components/App';
import UserRegistration from './components/UserRegistration';
import Login from './components/Login';

ReactDOM.render(
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/userRegistration" component={UserRegistration} />
        </Switch>
      </div>
    </Router>,
  document.getElementById('root')
);
