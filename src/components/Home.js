import React from 'react';
import TweetSearch  from './TweetSearch';
import CreateTweet from './CreateTweet';

export default function Home() {
  const onChange = () => {
    console.log(12);
  };

  const tweets = [
    { body: 'Tweet One', id: 1, likes: 11, retweets: 100 },
    { body: 'Tweet Two', id: 2, likes: 75, retweets: 42 }
  ];

  const tweetList = tweets.map(tweet => {
    return <CreateTweet tweet={tweet} key={tweet.id}/>;
  });

  return (
    <main>
      <section>
        <TweetSearch onChange={onChange}  term={'Best Tweet'}/>
      </section>

      <section>
        {tweetList}
      </section>
    </main>
  );
}
