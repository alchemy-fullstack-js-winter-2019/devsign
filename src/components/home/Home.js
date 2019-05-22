import React from 'react';
import styles from './Home.css';
import AllTweets from '../../containers/AllTweets';
import Header from '../header/header';

function Home() {
  return (
    <>
    <main className={styles.Home}>
      <section>
        <Header />
        <h2>Tweets</h2>
        <AllTweets />
      </section>
    </main>
    </>
  );
}
export default Home;
