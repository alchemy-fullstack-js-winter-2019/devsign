import React from 'react';
import PropTypes from 'prop-types';

function QuibForm({ text, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <textarea name="text" value={text} onChange={onChange} />
    </form>
  );
}

QuibForm.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default QuibForm;
