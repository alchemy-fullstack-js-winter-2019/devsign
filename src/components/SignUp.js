import React from 'react';

function SignUp() {
  return (
    <form>
      <input readOnly={true} type="text" name="name" value="name"/>
      <input readOnly={true} type="text" name="handle" value="handle"/>
      <input readOnly={true} type="password" name="password" value="password"/>
      <button>Sign In</button>
    </form>
  );
}

export default SignUp;
