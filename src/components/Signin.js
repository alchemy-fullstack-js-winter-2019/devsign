import React from 'react';
import { Form, Input, Button, StyledHeader, P, StyledLink } from '../styles/mainStyle';

function Signin() {
  return (
    <>
    <StyledHeader>
      <h1>Chirp</h1>
    </StyledHeader>
    <Form>
      <Input readOnly={true} type="text" name="handle" value="handle"/>
      <Input readOnly={true} type="password" name="password" value="password"/>
      <Button>Sign In</Button>
      <StyledLink to="/signup"><P>Not a User?</P></StyledLink>
    </Form>
    </>
  );
}

export default Signin;
