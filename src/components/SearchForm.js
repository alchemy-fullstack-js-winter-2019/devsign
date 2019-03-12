import React from 'react';
import { Form, Input, Button } from '../styles/mainStyle';

function SearchForm() {
  return (
    <Form>
      <Input readOnly={true} type="text" id="search" value="search Twitter"/>
      <Button>Search</Button>
    </Form>
  );
}

export default SearchForm;
