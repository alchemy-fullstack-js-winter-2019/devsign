import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import styles from './Messages.css';


function Messages({ messages }) {
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

export default Messages;
