import React from 'react';
// import Navigation from './Navigation';
import styles from './css/Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
    <header className={styles.header}>
      <img src='src/assets/tweety.png' alt='tweetybird'/>
      {/* <nav>
        <Navigation />
      </nav> */}
    </header>
    <main className={styles.main}>
      <h1>Welcome to your Tweety School Tweets</h1>
      <h2>Just another way to staying relevant!</h2>
      <section className={styles.account}>
        <ul>
          <Link to="/home">Create an Account</Link>
          <Link to="/home" >Sign In</Link>
        </ul>
      </section>
    </main>
    </>
  );
}
