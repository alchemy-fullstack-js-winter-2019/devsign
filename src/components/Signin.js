import React from 'react';
import { Form, Input, Button, StyledHeader, P, StyledLink, Label } from '../styles/mainStyle';

function Signin() {
  return (
    <>
    <StyledHeader>
      <h1>Chirp</h1>
    </StyledHeader>
    <Form>
      <Label htmlFor="handle">Chirp handle</Label>
      <Input readOnly={true} type="text" name="handle" id="handle" value="handle"/>
      <Label htmlFor="password">password</Label>
      <Input readOnly={true} type="password" name="password" id="password" value="password"/>
      <Label htmlFor="sign-in"></Label>
      <Button id="sign-in">Sign In</Button>
      <StyledLink to="/signup"><P>Not a User?</P></StyledLink>
    </Form>
    </>
  );
}

export default Signin;
