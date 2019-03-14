// import ChirpsFeed from '../main/ChirpsFeed';
import Footer from '../footer/Footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { getRoutes } from '../../routes';
import Header from '../header/Header';
import styles from 'styled-components';

const AppStyle = styles.body`
  background: #fff6be;
`;

export default function App() {
  return (
    <AppStyle>
      <Router>
      <>
      <Header />
      <Switch>
        {getRoutes()}
      </Switch>
      <Footer />
      </>
      </Router>
    </AppStyle>
  );
}
