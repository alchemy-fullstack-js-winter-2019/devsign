import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import styles from './Messages.css';

const alerts = [
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
export default function Messages({ messages = alerts }) {
  const listOfMessages = messages.map((message, i) => {
    return <li key={i}><Message message={message}/></li>;
  });
  
  return (
    <section className={styles.Messages}>
      <h3>Messages</h3>
      <ul >{listOfMessages}</ul>
    </section>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
