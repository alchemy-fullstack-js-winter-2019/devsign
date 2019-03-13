import React from 'react';
import PropTypes from 'prop-types';

// {
//   user: { handle: 'handle', image: 'image' },
//   action: 'Liked your photo',
//   date: 'March 12, 2019'
// };
export default function Notification({ notification }) {
  const { user, action, date } = notification;
  return (
  <>
    <figure>
      <img src={user.image} alt="user avatar" />
    </figure>
    <h3>{user.handle}</h3>
    <p>{action}</p>
    <p>{date}</p>
  </>
  );
}
Notification.propTypes = {
  notification: PropTypes.object
};
