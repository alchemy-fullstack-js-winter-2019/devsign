import React from 'react';
import Notifications from './Notifications';

const notifications = [
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

export default function NotificationsPage() {
  return (
    <>
     <Notifications notifications={notifications} />
    </>
  );
}
