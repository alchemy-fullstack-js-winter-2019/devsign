import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';

export default function Notifications({ notifications }) {
  const listOfNotifications = notifications.map((notification, i) => {
    return <li key={i}><Notification notification={notification} /></li>;
  });
  
  return (
    <article>
      <header>
        <h2>Notifications</h2>
      </header>
      <ul>{listOfNotifications}</ul>
    </article>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array
};
