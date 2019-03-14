import React from 'react';

function Login() {
  return (
    <section>
      <form>
        <h3>SIGN IN</h3>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" size="30" placeholder="youremail@example.com" required/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" size="30" required/>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Login;
