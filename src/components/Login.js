import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
    <h1>Rockin Robin</h1>
      <form>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button>Submit</button>
      </form>
    </>
  );
}
