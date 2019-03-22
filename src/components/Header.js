/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function Header() {
  return (
    <div className={styles.links}>
      <Link to='/'> <p>Home</p> </ Link>
      <Link to='/profile'> <p>Profile</p> </ Link>
      <Link to='/followers'> <p>Followers</p>  </ Link>
    </div>  
    
  );
}


export default Header;




