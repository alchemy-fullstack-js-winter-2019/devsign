import React from 'react';
import { Form, Input, Button } from '../styles/mainStyle';
import styled from 'styled-components';

const MobileForm = styled(Form) `
  background-color: #f3d8c4;
  flex-direction: row;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SearchInput = styled(Input) `
  width: 75%;
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
      <Button id="searchButton">Search Chirp</Button>
    </MobileForm>
  );
}

export default SearchForm;
