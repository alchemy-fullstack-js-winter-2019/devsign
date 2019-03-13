import React from 'react';
import TweetForm  from './TweetForm';
import Tweet from '../profile/Tweet';
import styles from './Home.css';

export default function Home() {
    const onChange = () => {
        return console.log('cahnged');
    };
    const tweets = [
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 }, { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
    ];
    const tweetList = tweets.map(tweet => {
        return <Tweet tweet={tweet} key={tweet.id}/>;

    });
    return (
        <main className={styles.Home}>
            <section id={styles.form}>
                <TweetForm onChange={onChange}  term={'some term'}/>
            </section>
            <section>
                {tweetList}
            </section>
        </main>
    );
}
