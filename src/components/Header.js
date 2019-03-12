import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';
import { StyledHeader } from '../styles/mainStyle';

function Header() {
  return (
    <StyledHeader>
      <Nav />
      <h1>Chirp</h1>
      <SearchForm />
    </StyledHeader>
  );
}

export default Header;
