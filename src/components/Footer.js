import React from 'react';
import 'normalize.css';
import styles from './css/Footer.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </nav>  
    </footer>
  );
}

export default Footer;
