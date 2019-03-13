import React from 'react';
import { MobileForm, Label, SearchInput, SearchButton } from '../styles/search';

function SearchForm() {
  return (
    <MobileForm>
      <Label htmlFor="search">Search</Label>
      <SearchInput readOnly={true} type="text" id="search" value=""/>
      <Label htmlFor="searchButton"></Label>
      <SearchButton id="searchButton">Search</SearchButton>
    </MobileForm>
  );
}

export default SearchForm;
