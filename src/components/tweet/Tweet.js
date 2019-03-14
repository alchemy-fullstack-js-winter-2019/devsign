import React from 'react';
import PropTypes from 'prop-types';

export default function Tweet({ tweet }) {
  return (
    <li>
      <p>
        {tweet.body}
      </p>
      
      <p>
        Likes: {tweet.likes}
      </p>

      <p>
        Retweets: {tweet.retweets}
      </p>

      <button>Like</button>
      <button>Retweet</button>      
    </li>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};
