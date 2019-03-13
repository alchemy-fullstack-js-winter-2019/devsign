import React from 'react';
import style from './Home.css';
import Tweets from '../components/tweets/Tweets';

const tweets = 
  [
    { _id: '1', text: 'my first tweet', user: { handle: 'Larry_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '2', text: 'my second tweet', user: { handle: 'Big_Bird', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '3', text: 'my third tweet', user: { handle: 'Tweety', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '4', text: 'my fourth tweet', user: { handle: 'Scrooge', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    { _id: '5', text: 'my firth tweet', user: { handle: 'R_R', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } }
  ]

export default function Home() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <section className={style.profile}>
          <figure>
            <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            <h3>T_on_A</h3>
          </figure>
        </section>
        <section className={style.post}>
          <label>Post a Tweet</label>
          <input type="text box" placeholder='Tweet at me' />
          <button>Tweet</button>
        </section>
      </header>
      <Tweets tweets={tweets}/>
    </main>
  );
}
