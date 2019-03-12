import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Signin from '../Signin';
import Signup from '../Signup.js';
import Home from '../Home';
import Profile from '../Profile';
import 'normalize.css';


export default function App() {
  return ( 
    <Router>
      <>
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
