import React from 'react';
import styles from './Home.css';
import AllTweets from '../../containers/AllTweets';


function Home() {
  return (
    <main className={styles.Home}>
      <header>
        <nav>
          <ul>
            <p><li><a href="/Home">HOME </a></li></p>
            <p><li><a href="/SignOut">SIGN OUT</a></li></p>
          </ul>
        </nav>
        <h1> Home Page</h1>
        <AllTweets />
      </header>

      <footer><p>©Copyright. All rights reserved</p></footer>
    </main>
  );
}
export default Home;
