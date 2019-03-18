import React from 'react';
import PropTypes from 'prop-types';

export default function Tweet({ tweet }) {
  const { text } = tweet;
  return (
    <section>
      <p>{text}</p>
    </section>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};
