import React from 'react';
import 'normalize.css';
import styles from './css/Home.css';
import Tweets from './Tweets';

const popularTweets = [
  { _id: '1234', text: 'What up!', user: { handle: 'motley', profile: 'http://i.pravatar.cc/1000' } },
  { _id: '1235', text: 'Blah Blah!', user: { handle: 'tyler', profile: 'http://i.pravatar.cc/1000' } },
  { _id: '1236', text: 'Feed me!', user: { handle: 'lync', profile: 'http://i.pravatar.cc/1000' } },
  { _id: '1237', text: 'Give me the ball!', user: { handle: 'cody', profile: 'http://i.pravatar.cc/1000' } }
];

function Home() {
  return (
    <main className={styles.feed}>
      <Tweets tweets={popularTweets} />
    </main>
  );
}

export default Home;

/* <div>
  <h2>Ball is Life</h2>
  <h3>Jackmerius Tacktheritrix</h3>
  <p>Ball everyday!</p>
  <img alt="placeholder" src="https://via.placeholder.com/300" />
</div>

<div>
  <h2>Trade Alert!</h2>
  <h3>Hingle McCringleberry</h3>
  <p>Player traded!</p>
  <img alt="placeholder" src="https://via.placeholder.com/300" />
</div>

<div>
  <h2>Baller Alert!</h2>
  <h3>Davoin Shower-Handel</h3>
  <p>Player injured!</p>
  <img alt="placeholder" src="https://via.placeholder.com/300" />
</div> */
