import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import LoginSignup from '../login/LoginSignUp';
import Home from '../home/Home';
import NotificationsPage from '../notifications/NotificationsPage';
import Profile from '../profile/Profile';
import Loading from '../loading/Loading';
import MessagesPage from '../messages/MessagesPage';
import style from './Header.css';

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
          <Route exact path='/' component={Home} />
          <Route exact path='/login-signup' component={LoginSignup} />
          <Route exact path='/notifications' component={NotificationsPage} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/loading' component={Loading} />
          <Route exact path='/messages' component={MessagesPage} />
  
        </Switch>
      </div>
    </Router>
  );
}
