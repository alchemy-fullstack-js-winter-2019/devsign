import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Header, P } from '../styles/mainStyle';

function Signin() {
  return (
    <>
    <Header>
      <h1>TWITTER</h1>
    </Header>
    <Form>
      <Input readOnly={true} type="text" name="handle" value="handle"/>
      <Input readOnly={true} type="password" name="password" value="password"/>
      <Button>Sign In</Button>
      <Link to="/signup"><P>Not a User?</P></Link>
    </Form>
    </>
  );
}

export default Signin;
