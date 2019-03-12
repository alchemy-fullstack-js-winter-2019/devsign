import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Header from '../Header';
import Signin from '../Signin';
import Signup from '../Signup.js';
import Home from '../Home';
import Profile from '../Profile';


export default function App() {
  return ( 
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
      </>
    </Router>
  );
}
