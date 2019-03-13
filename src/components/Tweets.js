import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';
import styles from './css/Tweets.css';

function Tweets({ tweets }) {
  const tweetItems = tweets.map(tweet => {
    return <li key={tweet._id}><Tweet tweet={tweet} /></li>;
  }); 

  return (
    <div>
      <ul className={styles.tweetItems}>
        {tweetItems}
      </ul>
    </div>
  );
}

Tweets.propTypes = { 
  tweets: PropTypes.array.isRequired
};

export default Tweets;
