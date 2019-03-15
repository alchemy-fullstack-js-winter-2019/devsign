import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.css';

function Notification({ notification }) {
  const { user, action } = notification;
  return (
    <section className={styles.Notification}>
      <figure>
        <img src={user.image} alt="user avatar" />
        <h3>{user.handle}</h3>
      </figure>
      <p>{action}</p>
    </section>
  );
}
Notification.propTypes = {
  notification: PropTypes.object
};

export default Notification;
