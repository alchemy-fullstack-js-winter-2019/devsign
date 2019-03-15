import React from 'react';
import styles from './Header.css';

import logoPic from '../../../assets/tornado.svg';


export default function Header() {
  return (
    <header className={styles.Header}>
      <img src={logoPic}/>
      <h1>TWISTLER</h1>
      <h2>the only weather twitter app</h2>
    </header>
  );
};
