import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from '../../routes';
import 'normalize.css';
import './App.css';


export default function App() {
  return (
    <Router>
      <>
        <Switch>
          {getRoutes()}
        </Switch>
      </>
    </Router>
  );
}

// import Home from '../Home';
// import About from '../About';
// import Posts from '../Posts';
// import Login from '../Login';
{/* <Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/posts" component={Posts} />
<Route exact path="/login" component={Login} /> */}
