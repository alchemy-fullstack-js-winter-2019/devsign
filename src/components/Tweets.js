import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

function Tweets({ tweets }) {
  const tweetList = tweets.map((tweet, i) => {
    return <li key={i}><Tweet
      profileImage={tweet.profileImage}
      name={tweet.name} 
      text={tweet.text}
      handle={tweet.handle}
    /></li>;
  });
  return (
    <section>
      <ul>
        {tweetList}
      </ul>
    </section>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
