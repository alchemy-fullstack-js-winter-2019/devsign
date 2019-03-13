import React from 'react';
import PropTypes from 'prop-types';
import './TweetForm.css';

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
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default TweetForm;
