import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from '../routes';

function App() {
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
export default App;
