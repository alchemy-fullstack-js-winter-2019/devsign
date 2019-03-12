import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';

function Tweets({ tweets }) {
  const tweetsList = tweets.map(tweet =>
    <li key={tweet.id}>
      <Link to={`/user/${tweet.userId}`}>
        <Tweet tweet={tweet} />
      </Link>
    </li>
  );

  return (
    <>
      <h2>Latest Tweets:</h2>
      <ul>{tweetsList}</ul>
    </>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
