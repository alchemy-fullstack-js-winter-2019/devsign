import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/User.css';

function User({ user }) {
  const { handle, profileImg } = user;
  return ( 
    <figure className={styles.user}>
      <figcaption>{handle}</figcaption>
      <img alt="profileImage" src={profileImg} />
    </figure>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
