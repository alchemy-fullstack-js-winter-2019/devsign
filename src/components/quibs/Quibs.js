import React from 'react';
import PropTypes from 'prop-types';
import Quib from './Quib';
import styles from '../css/Quibs.css';

function Quibs({ quibs }) {
  const quibItems = quibs.map(quib => {
    return <li key={quib._id}><Quib quib={quib} /></li>;
  }); 

  return (
    <div>
      <ul className={styles.quibItems}>
        {quibItems}
      </ul>
    </div>
  );
}

Quibs.propTypes = { 
  quibs: PropTypes.array.isRequired
};

export default Quibs;
