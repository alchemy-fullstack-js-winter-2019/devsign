import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../Landing';
import Registration from '../Registration';
import Tweet from '../Tweet';
import Home from '../Home';
import 'normalize.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/tweet" component={Tweet} />
        <Route exact paht="/Home" component={Home} />
      </Switch>
    </Router>
  );
}
