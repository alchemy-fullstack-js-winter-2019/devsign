import React from 'react';
import styles from './Home.css';
import AllTweets from '../../containers/AllTweets';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <main className={styles.Home}>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signout">Sign Out</Link>
        </nav>
      </header>
      <section>
        <h2>Popular Tweets</h2>
        <AllTweets />
      </section>
    </main>
    </>
  );
}
export default Home;
