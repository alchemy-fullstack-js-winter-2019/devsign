import React from 'react';
import 'normalize.css';
import styles from '../css/Home.css';
import TopQuibs from '../../containers/quibs/TopQuibs';
import CreateQuib from '../../containers/quibs/CreateQuib';

function Home() {
  return (
    <main className={styles.feed}>
      <CreateQuib />
      <TopQuibs />
    </main>
  );
}

export default Home;
