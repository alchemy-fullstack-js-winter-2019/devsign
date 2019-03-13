import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <section>
      <User user={user} />
      <p>{text}</p>
    </section>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
