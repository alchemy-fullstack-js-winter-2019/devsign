import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tweet.css';

export default function Tweet({ tweet }) {
    return (
        <div >
            <li className={styles.li}>
                <section id="count">
                    <p>
                    Likes: {tweet.likes}
                    </p>
                    <p>
                    Retweets: {tweet.retweets}
                    </p>
                </section>
                <section id="content">
                    <p>
                        {tweet.body}
                    </p>
                    <p>
                        {tweet.id}
                    </p>
                </section>
                <section id={styles.buttons}>
                    <button>Like this Tweet</button>
                    <button>Retweet this Tweet</button>
                </section>
            
            </li>
        </div>
    );
}

Tweet.propTypes = {
    tweet: PropTypes.object.isRequired
};
