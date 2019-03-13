import React from 'react';
import { Form, Input, Button } from '../styles/mainStyle';
import styled from 'styled-components';

const MobileForm = styled(Form) `
  background-color: #f3d8c4;
  flex-direction: row;
  width: 75%;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SearchInput = styled(Input) `
  margin: 0.5em 0;
  width: 70%;
`;

const SearchButton = styled(Button) `
  margin: 0.5em;
`;

const Label = styled.label `
  color:  #f3d8c4;
`;

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
