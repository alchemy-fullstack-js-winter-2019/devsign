import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

export default function Tweets({ tweets }) {
  const listOfTweets = tweets.map((tweet, i) => {
    return <li key={i}><Tweet tweet={tweet}/></li>;
  });
  return (
    <ul>{listOfTweets}</ul>
  );
}
Tweets.propTypes = {
  tweets: PropTypes.array
};
