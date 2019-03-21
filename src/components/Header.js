import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <>
     <p>My Blog</p>
      <nav className={styles.Header}>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/login">Login</Link></span>
        <span><Link to="/posts">Posts</Link></span>
        <span><Link to="/about">About</Link></span>       
      </nav>
    </>
  );
}

