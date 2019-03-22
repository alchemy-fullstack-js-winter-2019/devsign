import React from 'react';
import PropTypes from 'prop-types';
// import styles from './PersonalTweet.css';

export default function PersonalTweet({ tweet }) {
  const { userTweet, img, likes, userName, } = tweet;
  return (
    <section>
      <div>
        <img src={img} />
      </div>
      <div>
        <p>{userName}</p>
        <p>{userTweet}</p>
        <p>{likes}</p>
      </div>
    </section>
  );
}

PersonalTweet.propTypes = {
  tweet: PropTypes.object.isRequired
};
