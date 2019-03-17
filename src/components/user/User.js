import React from 'react';
import styles from './User.css';
import PropTypes from 'prop-types';

function User({ user, className }) {
  const { handle, profileImg } = user;
  return (
  <>
    <main className={styles.User}>
      <figure className={className}>
        <img src={profileImg} />
        <figcaption>{handle}</figcaption>
      </figure>
    </main>
  {/* <footer><p>©Copyright. All rights reserved</p></footer> */}
  </>
  );
}
User.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default User;
