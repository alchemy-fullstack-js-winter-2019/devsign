import React from 'react';
import Navigation from '../components/Navigation';
import TrendingTweets from '../containers/TrendingTweets';
import { login } from '../services/auth';

export default function Home() {
  login(); //wherever we call login function it will launch 
  return (
    <>
    <header>
      <Navigation />
    </header>
    <main>
      <TrendingTweets />
    </main>
    </>
  );
}
