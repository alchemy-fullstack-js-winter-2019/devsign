import React from 'react';
import TweetSearch  from './TweetSearch';
import Tweet from './Tweet';
import styles from './Home.css';

export default function Home() {
  const onChange = () => {
    console.log(12);
  };

  const tweets = [
    { body: 'Tweet One', id: 1, likes: 11, retweets: 100 },
    { body: 'Tweet Two', id: 2, likes: 75, retweets: 42 }
  ];

  const tweetList = tweets.map(tweet => {
    return <Tweet tweet={tweet} key={tweet.id}/>;
  });

  return (
    <main className={styles.homeMain}>
      <section>
        <h1 className={styles.homeHeader}>Rockin Robin</h1>
        <TweetSearch onChange={onChange}  term={'Search'}/>
      </section>

      <section>
        <ul className={styles.tweetList}>
          {tweetList}
        </ul>
      </section>
    </main>
  );
}
