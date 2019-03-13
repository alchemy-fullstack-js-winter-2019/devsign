import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import { Form, Input, Button, Label } from '../styles/mainStyle';

const SignupForm = styled(Form) `
  @media (min-width: 700px) {
    width: 50%;
  }
`;

function Signup() {
  return (
    <>
    <Logo />
    <SignupForm>
      <Label htmlFor="name">Name</Label>
      <Input readOnly={true} type="text" name="name" id="name" value="name"/>

      <Label htmlFor="handle">Chirp Handle</Label>
      <Input readOnly={true} type="text" name="handle" id="handle" value="handle"/>

      <Label htmlFor="location">City-and-State</Label>
      <Input readOnly={true} type="text" name="location" id="city-and-state" value="location"/>

      <Label htmlFor="password">password</Label>
      <Input readOnly={true} type="password" name="password" id="password" value="password"/>

      <Label htmlFor="sign-up"></Label>
      <Button id="sign-up">Sign Up</Button>
    </SignupForm>
    </>
  );
}

export default Signup;
