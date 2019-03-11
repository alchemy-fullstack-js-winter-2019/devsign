import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Header from '../Header';

export default function App() {
  return ( 
    <Router>
      <>
      <Header />
      <Switch>
        {/* <Route path="/home" component={Home}></Route> */}
        {/* <Route path="/home" component={Profile}></Route> */}
      </Switch>
      </>
    </Router>
  );
}
