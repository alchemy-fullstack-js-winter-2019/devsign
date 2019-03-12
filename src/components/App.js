import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';


export default function App() {
    return (

      <Router>
        <>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch> 
          <Footer/>
        </>
      </Router>
    
    );
}