import React from 'react';

export default function Registration() {
  return (
    <>
    <h2>Register</h2>
    <form name='form' onSubmit>
      <label htmlFor="firstName">Name/Company</label>
      <input type="text" className name="firstName" value onChange />
      <label htmlFor="emailAddress">Email Address</label>
      <input type="text" className name="emailAddress" value onChange />
      <label htmlFor="userName">Username</label>
      <input type="text" className name="userName" value onChange />
      <label htmlFor="password">Password</label>
      <input type="text" className name="password" value onChange />
      <label htmlFor="twitterHandle">Create your Twitter Handle</label>
      <input type="text" className name="twitterHandle" value onChange />
      <label htmlFor="image">Upload Profile Image</label>
      <input type="text" className name="image" value onChange />
      <button className >Submit</button>
    </form>
    </>
  );
}
