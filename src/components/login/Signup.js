import React from 'react';

function Signup() {
  return (
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
  );
}
export default Signup;
