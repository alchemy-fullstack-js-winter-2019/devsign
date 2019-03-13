import React from 'react';
import Navigation from './Navigation';
import styles from './css/Home.css';


export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <nav>
        <Navigation />
      </nav>
    </header>
    <main className={styles.main}>
      <h1>Welcome to your Tweety Tweets</h1>
      <h2>Just another way to staying relevant!</h2>
      <div className={styles.register}>
        <a href="#0" >Sign up</a>
        <a href="#0">Log in</a>
      </div>
    </main>
    </>
  );
}
