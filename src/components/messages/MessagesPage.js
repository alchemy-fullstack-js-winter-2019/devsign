import React from 'react';
import Messages from './Messages';

const messages = [
  {
    user: {
      handle: 'Huey',
      image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg'
    },
    text: 'Good morrning',
    date: 'March 13, 2019'
  },
  {
    user: {
      handle: 'Luey',
      image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg'
    },
    text: 'Good morrning',
    date: 'March 13, 2019'
  },
  {
    user: {
      handle: 'Duey',
      image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg'
    },
    text: 'Good morrning',
    date: 'March 13, 2019'
  }
];
export default function MessagesPage() {
  return (
    <>
      <Messages messages={messages}/>
    </>
  );
}
