/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FollwersTweets.css';


export default function FollowersTweets({ tweet }) {
  const { user, text, likes, userLink, img } = tweet;
  return (
    <section>
      <a href={userLink}>
        <div>
          <img src={img} />
        </div>
        <div>
          <h4>{user}</h4>
          <p>{text}</p>
          <button>Likes:{likes}</button>
        </div>
      </a>
    </section>
  );

}

FollowersTweets.propTypes = {
  tweet: PropTypes.object.isRequired,
};
