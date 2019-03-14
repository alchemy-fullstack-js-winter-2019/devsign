import React from 'react';
import styles from './Home.css';
import PopularTweets from '../../containers/tweets/PopularTweets';

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <section>
        <h1 className={styles.homeHeader}>Rockin Robin</h1>
      </section>

      <section>
        <ul className={styles.tweetList}>
          <PopularTweets />
        </ul>
      </section>
    </main>
  );
}
