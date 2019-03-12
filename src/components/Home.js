import React from 'react';
import Navigation from './Navigation';
import Registration from './Registration';

export default function Home() {
  return (
    <>
    <header>
      <Navigation />
      <h1>Welcome to Twitter</h1>
    </header>
    <div>
      <h1>Just another way to staying relevant!</h1>
      <Registration />
    </div>
    </>
  );
}
