import React from 'react';
import Navigation from '../components/Navigation';
import TrendingTweets from '../containers/TrendingTweets';

export default function Home() {
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
