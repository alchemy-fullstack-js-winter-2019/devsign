import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';


export default function Tweets({ tweets }) {
  const listOfTweets = tweets.map(tweet => {
    return <li key={tweet._id}><Tweet profileImage={tweet.profileImage} name={tweet.name} text={tweet.text} handle={tweet.handle} /></li>;
  });

  return (
    <section >
      <ul>
        {listOfTweets}
      </ul>
    </section>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};
