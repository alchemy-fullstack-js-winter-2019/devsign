import React from 'react';
import styles from './Login.css';

export default function Login() {
  return (
    <>
    <h1>Rockin Robin</h1>
      <form>
        <label className={styles.labels}>
          Username:
          <input type="text" placeholder="Username"/>
        </label>
        <label className={styles.labels}>
          Password:
          <input type="password" placeholder="Password"/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
