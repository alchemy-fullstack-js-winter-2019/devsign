import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';


const notes = [
  {
    user: { handle: 'Huey', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' },
    action: 'Liked your photo',
    date: 'March 12, 2019'
  },
  {
    user: { handle: 'Luey', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' },
    action: 'Tweeted',
    date: 'March 11, 2019'
  },
  {
    user: { handle: 'Duey', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' },
    action: 'Liked your tweet',
    date: 'March 12, 2019'
  }
];
export default function Notifications({ notifications = notes }) {
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
