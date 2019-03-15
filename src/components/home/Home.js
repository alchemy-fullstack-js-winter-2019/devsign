import React from 'react';
import 'normalize.css';
import styles from '../css/Home.css';
import TopTweets from '../../containers/tweets/TopTweets';
import { login } from '../../services/auth';

function Home() {
  login();
  return (
    <main className={styles.feed}>
      <TopTweets />
    </main>
  );
}

export default Home;

/* <div>
  <h2>Ball is Life</h2>
  <h3>Jackmerius Tacktheritrix</h3>
  <p>Ball everyday!</p>
  <img alt="placeholder" src="https://via.placeholder.com/300" />
</div>

<div>
  <h2>Trade Alert!</h2>
  <h3>Hingle McCringleberry</h3>
  <p>Player traded!</p>
  <img alt="placeholder" src="https://via.placeholder.com/300" />
</div>

<div>
  <h2>Baller Alert!</h2>
  <h3>Davoin Shower-Handel</h3>
  <p>Player injured!</p>
  <img alt="placeholder" src="https://via.placeholder.com/300" />
</div> */
