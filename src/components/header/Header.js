import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
    <h1>CHIRP</h1> 
      <nav>
        <Link to="/">CHIRPS</Link>
        <Link to="/">PROFILE</Link>
        <Link to="/">LOGOUT</Link>
      </nav>
    </header>
  );
}

