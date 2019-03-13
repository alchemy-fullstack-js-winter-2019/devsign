import React from 'react';
import Navigation from '../components/Navigation';
import styles from '../components/css/Tweet.css';
import Tweets from '../components/Tweets';

export default function Tweet() {
  return (
    <>
    <header className={styles.tweet}>
      <Navigation />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRJRA8ywW_omvM7B-9KwlPGxsP6WCdGuKShl211WtKEoJ_h6D" alt="bugs bunny"/>
    </header>
    <main>
      <h2>Your feed</h2>
      <section>
        <Tweets />
      </section>
    </main>
  </>
  );
}
