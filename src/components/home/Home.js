import React from 'react';
import TweetForm  from './TweetForm';
import Tweet from '../profile/Tweet';

export default function Home() {
    const onChange = () => {
        return console.log('cahnged');
    };
    const tweets = [
        { body: 'some body', id: 1, likes: 100, retweets: 10000 },
        { body: 'some body two', id: 2, likes: 100, retweets: 10000 }
    ];
    const tweetList = tweets.map(tweet => {
        return <Tweet tweet={tweet} key={tweet.id}/>;

    });
    return (
        <main>
            <section>
                <TweetForm onChange={onChange}  term={'some term'}/>
            </section>
            <section>
                {tweetList}
            </section>
        </main>
    );
}
