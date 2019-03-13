import React from 'react';
import { MobileForm, Input, Button } from '../styles/mainStyle';

function SearchForm() {
  return (
    <MobileForm>
      <Input readOnly={true} type="text" id="search" value=""/>
      <Button>Search Chirp</Button>
    </MobileForm>
  );
}

export default SearchForm;
