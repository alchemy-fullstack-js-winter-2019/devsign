import React from 'react';
import Logo from './Logo';
import { Form, Input, Button, Label } from '../styles/mainStyle';

function Signup() {
  return (
    <>
    <Logo />
    <Form>
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
    </Form>
    </>
  );
}

export default Signup;
