import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tweets.css';

export default function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <section className={styles.Tweet}>
      <figure>
        <img src={user.image} alt="user avatar"/>
        <h3>{user.handle}</h3>
      </figure>
      <p>{text}</p>
    </section>
  );
}
Tweet.propTypes = {
  tweet: PropTypes.object
};
