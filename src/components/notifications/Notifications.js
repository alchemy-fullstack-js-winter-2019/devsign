import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';
import styles from './Notification.css';

function Notifications({ notifications }) {
  const listOfNotifications = notifications.map((notification, i) => {
    return <li key={i}><Notification notification={notification} /></li>;
  });

  return (
    <article className={styles.Notifications}>
      <header>
        <h2>Notifications</h2>
      </header>
      <section>
        <ul>{listOfNotifications}</ul>
      </section>
    </article>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array
};

export default Notifications;
