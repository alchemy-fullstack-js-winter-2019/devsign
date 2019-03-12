import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import BallerFeed from './Tweets';

function App() {
  return (
    <Fragment>
      <Header />
      <BallerFeed />
      <Footer />
    </Fragment>
  );
}

export default App;
