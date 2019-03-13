import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import 'normalize.css';
import styles from '../css/Tweet.css';

function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <section className={styles.tweet}>
      <User user={user} />
      <p>{text}</p>
    </section>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
