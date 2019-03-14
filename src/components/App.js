import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { getRoutes } from '../routes';
import Header from './common/Header';
import Footer from './common/Footer';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          {getRoutes()}
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
