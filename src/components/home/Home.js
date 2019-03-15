import React from 'react';
import 'normalize.css';
import styles from '../css/Home.css';
import TopTweets from '../../containers/tweets/TopTweets';

function Home() {
  return (
    <main className={styles.feed}>
      <TopTweets />
    </main>
  );
}

export default Home;
