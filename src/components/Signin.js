import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import { Form, Input, Button, P, StyledLink, Label } from '../styles/mainStyle';

const SigninForm = styled(Form) `
  @media (min-width: 700px) {
    width: 50%;
  }
`;

function Signin() {
  return (
    <>
    <Logo />
    <SigninForm>
      <Label htmlFor="handle">Chirp handle</Label>
      <Input readOnly={true} type="text" name="handle" id="handle" value="handle"/>
      <Label htmlFor="password">password</Label>
      <Input readOnly={true} type="password" name="password" id="password" value="password"/>
      <Label htmlFor="sign-in"></Label>
      <Button id="sign-in">Sign In</Button>
      <StyledLink to="/signup"><P>Not a User?</P></StyledLink>
    </SigninForm>
    </>
  );
}

export default Signin;
