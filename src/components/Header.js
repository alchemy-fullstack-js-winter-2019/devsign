import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import LoginSignup from './LoginSignUp';
import Home from './Home';
// import Notifications from './Notifications';
// import Profile from './Profile';

export default function Header() {
  return (
    <Router>
      <div>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/messages'>Messages</Link>
          <Link to='/notifications'>Notifications</Link>
          <Link to='/profile'>Profile</Link>
          <label>Search</label>
          <input type="text" />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login-signup' component={LoginSignup} />
          {/* <Route exact path='/notifications' component={Notifications} /> */}
          {/* <Route exact path='/profile' component={Profile} /> */}
        </Switch>
      </div>
    </Router>
  );
}
