import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';
import styles from './Tweets.css';

function Tweets({ tweets }) {
  const tweetsList = tweets.map(tweet =>
    <li key={tweet.id}>
      <Link to={`/user/${tweet.userId}`}>
        <Tweet tweet={tweet} />
      </Link>
    </li>
  );

  return (
    <div>
      <h2>Latest Tweets:</h2>
      <ul className={styles.Tweets}>{tweetsList}</ul>
    </div>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
