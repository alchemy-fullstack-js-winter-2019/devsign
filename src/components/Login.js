import React from 'react';

export default function Login() {
  return (
    <form>
      <label>Username: 
        <input type="text"/>
      </label>
      <label>Password: 
        <input type="password"/>
      </label>
      <button>Submit</button>
    </form>
  );
}
