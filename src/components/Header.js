import React from 'react';

function Header() {
  return (
    <header>
      <h1>Tweeter</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
