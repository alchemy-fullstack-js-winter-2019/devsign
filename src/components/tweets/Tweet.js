import React from 'react';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
  return (
    <>
      <img src={tweet.img} />
      <p>{tweet.text}</p>
    </>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object
};

export default Tweet;
