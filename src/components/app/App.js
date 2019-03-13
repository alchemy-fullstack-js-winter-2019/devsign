import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Registration from '../Registration';
import Tweet from '../Tweet';
import 'normalize.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/tweet" component={Tweet} />
      </Switch>
    </Router>
  );
}
