import React from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import styles from './css/Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Quibbler</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
