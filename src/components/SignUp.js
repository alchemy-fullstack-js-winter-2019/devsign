import React from 'react';
import { Form, Input, Button, Header } from '../styles/mainStyle';

function Signup() {
  return (
    <>
    <Header>
      <h1>TWITTER</h1>
    </Header>
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
