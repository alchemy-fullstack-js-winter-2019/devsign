import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

export default function User({ user }) {
  const { handle, name, image, bio } = user;
  return (
    <article style={styles.User}>
      <figure>
        <img src={image} alt="user avatar" />
      </figure>
      <h3>{name}</h3>
      <h4>@{handle}</h4>
      <p>{bio}</p>
    </article>
  );
}
User.propTypes = {
  user: PropTypes.object.isRequired
};
