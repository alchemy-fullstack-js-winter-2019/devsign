import React from 'react';
import PropTypes from 'prop-types';

function Login() {
  return (
    <section>
      <h2>Already a user?</h2>
      <figure>
        <img src="image" alt='user avatar' />
      </figure>
      <form>
        <label>Username or email</label>
        <input type="text" value='handle' />
        <label>Password</label>
        <input type="text" value='password' />
        <button>Tweet</button>
      </form>
    </section>
  );
}

Login.propTypes = {
  user: PropTypes.object
};
export default Login;
