import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

function Tweets({ tweets }) {
  const tweetList = tweets.map((tweet, i) => {
    return <li key={i}><Tweet /></li>;
  });
  return (
    <ul>
      {tweetList}
    </ul>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
