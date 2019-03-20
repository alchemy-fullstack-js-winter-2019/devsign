import React from 'react';
import 'normalize.css';
import styles from '../css/Home.css';
import TopQuibs from '../../containers/quibs/TopQuibs';

function Home() {
  return (
    <main className={styles.feed}>
      <TopQuibs />
    </main>
  );
}

export default Home;
