import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.css';

export default function Message({ message }) {
  const { user, text, date } = message;
  return (
    <>
      <section className={styles.section}>
        <p className={styles.date}>{date}</p>
        <section>
          <h3>{user.handle}</h3>
          <img src={user.image} className={styles.img}/>
        </section>
        <p>{text}</p>
      </section>
    </>
  );
}

Message.propTypes = {
  message: PropTypes.object
};


