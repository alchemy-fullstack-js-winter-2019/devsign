import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
