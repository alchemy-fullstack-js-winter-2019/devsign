import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/QuibForm.css';

function QuibForm({ body, handleSubmit, onChange }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit.bind(null, body)}>
      <textarea type="text"name="body" value={body} onChange={onChange} />
      <button>Add Quib</button>
    </form>
  );
}

QuibForm.propTypes = {
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default QuibForm;
