import React from 'react';
import styles from './User.css';
import AllTweets from '../../containers/AllTweets';

function User() {
  return (
    <main className={styles.User}>
      <section>
        <h1>Welcome!</h1>
        <AllTweets />
        <h2>Your tweets of the day:</h2>
        <div>
          <p>Tweet 1</p>
          <p>Tweet 2</p>
        </div>
      </section>
    </main>
  );
}
export default User;
