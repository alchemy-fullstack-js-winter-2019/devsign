import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../routes';

function Login() {
  
  return (
    
    <Redirect to={ROUTES.HOME.linkTo()} />
    // <section>
    //   <form>
    //     <h3>SIGN IN</h3>
    //     <label htmlFor="email">Email</label>
    //     <input type="email" name="email" id="email" size="30" placeholder="youremail@example.com" required/>
    //     <label htmlFor="password">Password</label>
    //     <input type="text" name="password" id="password" size="30" required/>
    //     <button>Submit</button>
    //   </form>
    // </section>
  );
}

export default Login;
