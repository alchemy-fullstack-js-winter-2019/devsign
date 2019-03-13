import React from 'react';
import Tweet from './Tweet';
import styles from './Profile.css';

export default function Profile() {
    const tweets = [
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 }, { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 }
    ];
    const tweetList = tweets.map(tweet => {
        return <Tweet tweet={tweet} key={tweet.id}/>;

    });
    return (
        <main className={styles.Home}>
            <section>
                <figure>
                    <img id={styles.banner} src="https://via.placeholder.com/600X400" alt="banner"/>
                </figure>
            </section>
            <section id={styles.about}>
                <figure>
                    <img src="https://via.placeholder.com/150" alt="profile photo"/>
                </figure>
                <p>Followers: 30
                Tweets: 30
                Following: 30</p>
            </section>
            <section id={styles.tweets}>
                {tweetList}
            </section>
        </main>
    );
}

