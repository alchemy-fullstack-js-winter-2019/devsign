import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ user, tweets }) {
  const { name, handle } = user;
  const tweetsList = tweets.map(tweet => {
    return <li key={tweet.id}>{tweet}</li>;
  });
  return (
    <>
      <h1>{name}</h1>
      <h2>{handle}</h2>
      <ul>
        {tweetsList}
      </ul>
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  tweets: PropTypes.array.isRequired
};
