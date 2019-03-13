import React from 'react';
import {
  Link
} from 'react-router-dom';
import './Header.css';




export default function Header() {
  return (
    <header>
      <img src="src/assets/Robin.png"/>
      <nav>
        <Link to='/'> Home </ Link>
        <Link to='/profile'> Profile </ Link>
        <Link to='/login'> Login </ Link>
        <Link to='/about'> About </ Link>
      </nav>
    </header>
  );
}
