import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header';
import Home from '../../containers/home/Home';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/toptweets"></Route>
          <Route path="/register"></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    </Router>
  );
}
