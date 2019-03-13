import React from 'react';

export default function LoginSignUp() {
  return (
    <>
      <main>
        <section>
          <h2>Already A User?</h2>
          <figure>
            <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
          </figure>
          <form>
            <label>Username or email</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <button>Tweet</button>
          </form>
        </section>
        <section>
          <h2>Sign Up</h2>
          <figure>
            <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
          </figure>
          <form>
            <label>Username</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <label>Re-enter Password</label>
            <input type="text" />
          </form>
        </section>
      </main>
    </>
  );
}
