import React from 'react';
import { Form, Input, Button, StyledHeader, Label } from '../styles/mainStyle';

function Signup() {
  return (
    <>
    <StyledHeader>
      <h1>Chirp</h1>
    </StyledHeader>
    <Form>
      <Label htmlFor="name">Name</Label>
      <Input readOnly={true} type="text" name="name" id="name" value="name"/>

      <Label htmlFor="handle">Chirp Handle</Label>
      <Input readOnly={true} type="text" name="handle" id="handle" value="handle"/>

      <Label htmlFor="password">password</Label>
      <Input readOnly={true} type="password" name="password" id="password" value="password"/>

      <Label htmlFor="sign-in"></Label>
      <Button id="sign-in">Sign In</Button>
    </Form>
    </>
  );
}

export default Signup;
