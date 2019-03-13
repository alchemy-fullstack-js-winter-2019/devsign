import React from 'react';
import { MobileForm, Input, Button, Label } from '../styles/mainStyle';

function SearchForm() {
  return (
    <MobileForm>
      <Label htmlFor="search">Search</Label>
      <Input readOnly={true} type="text" id="search" value=""/>
      <Label htmlFor="searchButton"></Label>
      <Button id="searchButton">Search Chirp</Button>
    </MobileForm>
  );
}

export default SearchForm;
