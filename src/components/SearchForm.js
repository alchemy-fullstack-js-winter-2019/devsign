import React from 'react';
import { MobileForm, Input, Button } from '../styles/mainStyle';

function SearchForm() {
  return (
    <MobileForm>
      <Input readOnly={true} type="text" id="search" value="search Chirp"/>
      <Button>Search</Button>
    </MobileForm>
  );
}

export default SearchForm;
