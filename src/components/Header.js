import React from 'react';
import Nav from './Nav';
import SearchForm from '../SearchForm';

function Header() {
  return (
    <header>
      <Nav />
      <h1>Twitter</h1>
      <SearchForm />
    </header>
  );
}

export default Header;
