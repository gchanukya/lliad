import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import App from './components/App';

ReactDOM.render(
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>,
  document.getElementById('root')
);
