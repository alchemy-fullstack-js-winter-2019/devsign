import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Posts from '../Posts';
import Login from '../Login';


export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </>
    </Router>
  );
}
