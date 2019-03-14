import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
     <p>My Blog</p>
      <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/login">Login</Link></span>
        <span><Link to="/posts">Posts</Link></span>
        <span><Link to="/about">About</Link></span>       
      </nav>
    </>
  );
}
