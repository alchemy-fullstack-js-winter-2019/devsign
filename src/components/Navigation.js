import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/css/Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <img src='src/assets/tweety.png' alt='tweetybird'/>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/createTweet"><li>Create New Tweet</li></Link>
      </ul>
    </nav>
  );
}
