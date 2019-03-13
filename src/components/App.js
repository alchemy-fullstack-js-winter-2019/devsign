import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import Login from './Login';
import About from './About';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


export default function App() {
  return (

    <Router>
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
        </Switch> 
        <Footer/>
      </>
    </Router>
  
  );
}
