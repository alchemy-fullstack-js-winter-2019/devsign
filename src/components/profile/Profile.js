import React from 'react';
import Tweet from './Tweet';


export default function Profile() {
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
                <figure>
                    <img src="https://via.placeholder.com/150"/>
                </figure>
                <figure>
                    <img src="https://via.placeholder.com/600X400"/>
                </figure>
            </section>
            <section>
                <p>Followers: 30</p>
                <p>Tweets: 30</p>
                <p>Following: 30</p>
            </section>
            <section>
                {tweetList}
            </section>
        </main>
    );
}

