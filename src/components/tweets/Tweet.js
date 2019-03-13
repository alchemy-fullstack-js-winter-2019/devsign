import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tweet.css';

export default function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <section style={styles.follower}>
      <figure>
        <img src={user.image}/>
        <h3>{user.handle}</h3>
      </figure>
      <p>{text}</p>
    </section>
  );
}
Tweet.propTypes = {
  tweet: PropTypes.object
};
