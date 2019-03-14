import React from 'react';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <>
    <p>{text}</p>
    <p>{user}</p>
    </>
  );
}
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
