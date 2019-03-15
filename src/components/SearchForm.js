import React from 'react';
import { MobileForm, Label, SearchInput, SearchButton } from '../styles/search';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, onChange }) {
  return (
    <MobileForm>
      <Label htmlFor="search">Search</Label>
      <SearchInput onChange={onChange} type="text" id="search" value={searchTerm}/>
      <Label htmlFor="searchButton"></Label>
      <SearchButton id="searchButton">Search</SearchButton>
    </MobileForm>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
