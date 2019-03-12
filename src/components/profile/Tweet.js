import React from 'react';
import PropTypes from 'prop-types';

export default function Tweet({ tweet }) {
    return (
        <li>
            <section>
                <p>
                    {tweet.body}
                </p>
                <p>
                    {tweet.id}
                </p>
            </section>
            <section>
                <p>
                    Likes: {tweet.likes}
                </p>
                <p>
                    Retweets: {tweet.retweets}
                </p>
            </section>
            <section>
                <button>Like this Tweet</button>
                <button>Retweet this Tweet</button>
            </section>
            
        </li>
    );
}

Tweet.propTypes = {
    tweet: PropTypes.object.isRequired
};
