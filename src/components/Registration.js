import React from 'react';
import styles from '../components/css/Registration.css';

export default function Registration() {
  return (
    <>
    <section className={styles.register}>
      <h2>Sign Up</h2>
      <form className={styles.signup} >
        <label htmlFor="firstName">Name/Company</label>
        <input type="text" className={styles.name} name="Name/Company" />
        <label htmlFor="emailAddress">Email Address</label>
        <input type="text" className={styles.email} name="emailAddress"  />
        <label htmlFor="userName">Username</label>
        <input type="text" className={styles.username} name="userName"  />
        <label htmlFor="password">Password</label>
        <input type="text" className={styles.password} name="password"  />
        <label htmlFor="twitterHandle">Create your Twitter Handle</label>
        <input type="text" className={styles.handle} name="twitterHandle"  />
        <label htmlFor="image">Upload Profile Image</label>
        <input type="text" className={styles.image} name="image"  />
        <a href="0" className={styles.register} >Register</a>
      </form>
    </section>
    <section>
      <h1>Activate Your Tweets</h1>
      <form className={styles.signin}>
        <label htmlFor="userName">Username</label>
        <input type="text" className={styles.username} name="userName"  />
        <label htmlFor="password">Password</label>
        <input type="text" className={styles.password} name="password"  />
        <a href="0" className={styles.signin}>Sign In</a>
      </form>
      
    </section>
    </>
  );
}
