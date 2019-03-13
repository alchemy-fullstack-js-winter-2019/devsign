import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.css';

export default function Notification({ notification }) {
  const { user, action } = notification;
  return (
    <section style={styles}>
      <img src={user.image} alt="user avatar" />
      <p>{action}</p>
      <h3>{user.handle}</h3>
    </section>
  );
}
Notification.propTypes = {
  notification: PropTypes.object
};
