import React from 'react';
// import PropTypes from 'prop-types';

function SearchForm() {
  return (
    <form>
      <input readOnly={true} type="text" id="search" value="search Twitter"/>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
