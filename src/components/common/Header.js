import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './Header.css';




export default function Header() {
  return (
    <header>
      <img src="src/assets/Robin.png" alt='rockin robin- twitter clone logo' className={styles.logo}/>
      <nav>
        <Link to='/'> Home </ Link>
        <Link to='/profile'> Profile </ Link>
        <Link to='/login'> Login </ Link>
        <Link to='/about'> About </ Link>
      </nav>
    </header>
  );
}
