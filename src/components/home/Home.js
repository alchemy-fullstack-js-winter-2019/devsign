import React from 'react';
import PopularTweets from '../../containers/tweets/PopularTweets';
import styles from './Home.css';

export default function Home() {
  return (
    <main className={styles.Home}>
      <PopularTweets />
    </main>
  );
}
