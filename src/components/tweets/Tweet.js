import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//add in the user;s avatar

function Tweet({ tweet, className }) {
  const { text } = tweet;
  return (
    <section className={className}>
      <p>{text}</p>
    </section>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default styled(Tweet);
