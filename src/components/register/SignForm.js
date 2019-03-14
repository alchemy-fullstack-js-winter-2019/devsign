import React from 'react';
import PropTypes from 'prop-types';

function SignForm({ signType, username, password, onChange, onSubmit }) {
  return (
    <>
      <h2>{signType}:</h2>
      <form onSubmit={onSubmit}>
        <label>
          <p>Username: <input name="username" type="text" value={username} onChange={onChange} /></p>
        </label>
        <label>
          <p>Password: <input name="password" type="password" value={password} onChange={onChange} /></p>
        </label>
        <button type="submit">{signType}</button>
      </form>
    </>
  );
}

SignForm.propTypes = {
  signType: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SignForm;
