import React from 'react';
import styles from './Home.css';
import Tweets from '../tweets/Tweets';

const popularTweets = [
  { _id: '0001', text: 'My first tweet', user: { handle: 'Tweedy', userPic: 'http://i.pravatar.cc/1000' } },
  { _id: '0002', text: 'I just flew in from Boise', user: { handle: 'Mocking Jay', userPic: 'http://i.pravatar.cc/1000' } },
  { _id: '0003', text: 'A guy is sitting at an airport bar', user: { handle: 'Parrot', userPic: 'http://i.pravatar.cc/1000' } },
  { _id: '0004', text: '...Tower, please call me a fuel truck.', user: { handle: 'Doug', userPic: 'http://i.pravatar.cc/1000' } },
  { _id: '0005', text: 'KLM 242 expect start up in two hours', user: { handle: 'Polly', userPic: 'http://i.pravatar.cc/1000' } }
];

export default function Home() {
  return (
    <main 
      className={styles.Home}
    > 
      <Tweets tweets={popularTweets} />
    </main>
  );
}
