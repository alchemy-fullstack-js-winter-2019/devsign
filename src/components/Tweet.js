import React from 'react';
import styles from '../components/css/Tweet.css';
import PropTypes from 'prop-types';

export default function Tweet({ name, handle, text, profileImage }) {
  return (
    <>
    <section>
      <header className={styles.tweet}>
        <img src={profileImage} alt={name}/>
        <h2>{name}</h2>
        <h3>{handle}</h3>
      </header>
      <p>{text}</p>
    </section>
  </>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
