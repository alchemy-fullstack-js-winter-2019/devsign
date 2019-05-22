import React from 'react';
import styles from './SignOut.css';
import Header from '../header/header';

function SignOut() {
  return (
    <main>
      <Header />
      <div className={styles.SignOut}>
        <h1>You are Signed Out!</h1>
      </div>
    </main>
  );
}
export default SignOut;
