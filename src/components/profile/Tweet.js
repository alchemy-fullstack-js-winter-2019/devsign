import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tweet.css';

export default function Tweet({ tweet }) {
    return (
        <div >
            <li className={styles.li}>
                <section id={styles.count}>
                    <p>
                        {tweet.handle}
                    </p>
                    <img src={tweet.img}/>
                    <p>
                    Likes: {tweet.likes}
                    </p>
                    <p>
                    Retweets: {tweet.retweets}
                    </p>
                </section>
                <section>
                    <p>
                        {tweet.text}
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
