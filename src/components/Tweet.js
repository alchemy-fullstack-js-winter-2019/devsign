import React from 'react';
import styles from '../components/css/Tweet.css';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';

export default function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <>
    <section>
      <header className={styles.tweet}>
        <UserInfo user={user} alt={user}/>
      </header>
      <p>{text}</p>
    </section>
  </>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};
