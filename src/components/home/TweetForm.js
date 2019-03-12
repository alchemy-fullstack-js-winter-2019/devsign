import React from 'react';
import PropTypes from 'prop-types';

function TweetForm({ tweet, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" placeholder="Tweet Something" onChange={onChange} value={tweet} />
        <button type="submit">Tweet</button>
      </label>
    </form>
  );
}

TweetForm.propTypes = {
  tweet: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default TweetForm;
