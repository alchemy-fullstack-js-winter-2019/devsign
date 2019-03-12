import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tweets from './Tweets';

function App() {
  return (
    <Fragment>
      <Header />
      <Tweets />
      <Footer />
    </Fragment>
  );
}

export default App;
