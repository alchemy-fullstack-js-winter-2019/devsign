import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  const listOfMessages = messages.map((message, i) => {
    return <li key={i}><Message message={message}/></li>;
  });
  
  return (
    <>
      <h3>Messages</h3>
      <ul>{listOfMessages}</ul>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
