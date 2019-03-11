import React from 'react';
// import PropTypes from 'prop-types';
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

// Header.propTypes = {
//   page: PropTypes.string.isRequired
// };

export default Header;
