import React from 'react';
// import Navigation from './Navigation';
import styles from './css/Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
    <header className={styles.header}>

      <nav>
        {/* <Navigation /> */}
      </nav>
    </header>
    <main className={styles.main}>
      <h1>Welcome to your Tweety Tweets</h1>
      <h2>Just another way to staying relevant!</h2>
      <div className={styles.register}>
        <Link to="/home">Signup</Link>
        <Link to="/home" >Sign up</Link>
      </div>
    </main>
    </>
  );
}
