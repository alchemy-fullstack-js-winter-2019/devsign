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
import Loading from '../Loading';
import Callback from '../../containers/auth/Callback';
import 'normalize.css';
import { withSession } from '../../containers/auth/withSession';


export default function App() {
  return ( 
    <Router>
      <>
      <Switch>
        <Route path="/loading" component={Loading} ></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/callback" component={Callback}></Route>
        <Route exact path="/" component={withSession(Signin)}></Route>
      </Switch>
      </>
    </Router>
  );
}
