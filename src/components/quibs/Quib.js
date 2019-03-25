import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';
import 'normalize.css';
import styles from '../css/Quib.css';

function Quib({ quib }) {
  const { text, user } = quib;
  return (
    <section className={styles.quib}>
      <User user={user} />
      <p>{text}</p>
    </section>
  );
}

Quib.propTypes = {
  quib: PropTypes.object.isRequired
};

export default Quib;
