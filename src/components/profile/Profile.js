import React from 'react';
import Tweets from '../../components/tweets/Tweets';
import styles from './Profile.css';
const tweets = 
  [
    { _id: '1', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '2', text: 'my second tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '3', text: 'my third tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '4', text: 'my fourth tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '5', text: 'my firth tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
  ];

export default function Profile() {
  return (
    <main>
      <article styles={styles}>
        <figure>
          <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
        </figure>
        <h3>Teonna</h3>
        <h4>T_on_A</h4>
        <p>Bio about me</p>
      </article>
      <Tweets tweets={tweets}/>
      <aside>
        <p>Trends</p>
      </aside>
    </main>
  );
}
