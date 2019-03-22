import React from 'react';
import PropTypes from 'prop-types';
import PersonalTweet from './PersonalTweet';

export default function PersonalTweetList({ tweets }) {
  const tweetList = tweets.map(tweet => {
    return <li key={tweet._id}><PersonalTweet tweet={tweet}/></li>;
  });
  return (
    <ul>{tweetList}</ul>
  );
}

PersonalTweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};
