import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import LoginSignup from '../login/LoginSignUp';
import Landing from '../landing/Landing';
import Notifications from '../notifications/Notifications';
import Profile from '../profile/Profile';
import Loading from '../loading/Loading';
import Messages from '../messages/Messages';
import style from './Header.css';
import { withSession } from '../../containers/auth/withSession';

export default function Header() {
  return (
    <Router>
      <div styles={style.header}>
        <header>
          <h1>Twitter Clone</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/messages'>Messages</Link>
            <Link to='/notifications'>Notifications</Link>
            <Link to='/profile'>Profile</Link>
            <input type="text" placeholder='search'/>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Landing} />
          
          <Route exact path='/notifications' component={withSession(Notifications)} />
          <Route exact path='/profile' component={withSession(Profile)} />
          <Route exact path='/loading' component={Loading} />
          <Route exact path='/messages' component={withSession(Messages)} />
  
        </Switch>
      </div>
    </Router>
  );
}
