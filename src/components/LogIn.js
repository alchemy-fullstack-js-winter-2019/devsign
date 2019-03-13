import React from 'react';
import styles from './LogIn.css';

function LogIn() {
  return (
    <main className={styles.LogIn}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNv5Ke-QXYdFrrbXhtXao-32YHP6c4KdLWnYD1gsHNQm0wnSew"/>
      <header>
        <nav>
          <h2>Log In</h2>
        </nav>
      </header>
      <form>
        <label> Name
          <input type="text"></input>
        </label>
        <label> Email
          <input type="email"></input>
        </label>
        <button>Submit</button>
      </form>
    </main>
  );
}
export default LogIn;
