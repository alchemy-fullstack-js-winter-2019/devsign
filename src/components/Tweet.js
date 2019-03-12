import React from 'react';
import PropTypes from 'prop-types';

function Tweet({ name, handle, text, profileImage }) {
  return (
    <article>
      <header>
        <img src={profileImage}/>
        <h2>{name} <span>{handle}</span></h2>
      </header>
      <p>{text}</p>
    </article>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default Tweet;
