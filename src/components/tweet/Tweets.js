import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

export default function Tweets({ tweets }) {
  const tweetItems = tweets.map(tweet => {
    return <li key={tweet._id}><Tweet tweet={tweet} /></li>;
  });

  return (
    <ul >
      {tweetItems}
    </ul>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};
