import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <form>
      <input readOnly={true} type="text" name="handle" value="handle"/>
      <input readOnly={true} type="password" name="password" value="password"/>
      <button>Sign In</button>
      <Link to="/signup"><p>Not a User?</p></Link>
    </form>
  );
}

export default Signin;
