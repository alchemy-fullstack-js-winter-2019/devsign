import React from 'react';
import PropTypes from 'prop-types';

export default function Tweet({ tweet }) {
  return (
    <li>
      <p>
        {tweet.text}
      </p>

      <button>Like</button>
      <button>Retweet</button>      
    </li>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};
