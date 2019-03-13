import React from 'react';
import Logo from './Logo';
import { Form, Input, Button, P, StyledLink, Label } from '../styles/mainStyle';

function Signin() {
  return (
    <>
    <Logo />
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
