import React from 'react';
import PropTypes from 'prop-types';

function TweetForm({ tweetText, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" placeholder="Tweet Something" onChange={onChange} value={tweetText} />
        <button type="submit">Tweet</button>
      </label>
    </form>
  );
}

TweetForm.propTypes = {
  tweetText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TweetForm;
