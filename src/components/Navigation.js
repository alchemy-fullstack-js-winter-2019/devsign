import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/css/Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/twitter"><li>My Twitter Page</li></Link>
      </ul>
    </nav>
  );
}
