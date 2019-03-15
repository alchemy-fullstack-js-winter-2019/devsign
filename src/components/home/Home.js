import React from 'react';
import 'normalize.css';
import styles from '../css/Home.css';
import TopTweets from '../../containers/tweets/TopTweets';
// import { login } from '../../services/auth';

function Home() {
  // login();
  return (
    <main className={styles.feed}>
      <TopTweets />
    </main>
  );
}

export default Home;
