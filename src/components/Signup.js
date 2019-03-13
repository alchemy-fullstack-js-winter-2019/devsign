import React from 'react';
import { Form, Input, Button, StyledHeader } from '../styles/mainStyle';

function Signup() {
  return (
    <>
    <StyledHeader>
      <h1>Chirp</h1>
    </StyledHeader>
    <Form>
      <Input readOnly={true} type="text" name="name" value="name"/>
      <Input readOnly={true} type="text" name="handle" value="handle"/>
      <Input readOnly={true} type="password" name="password" value="password"/>
      <Button>Sign In</Button>
    </Form>
    </>
  );
}

export default Signup;
