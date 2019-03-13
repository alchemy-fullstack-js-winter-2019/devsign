import React from 'react';
import PropTypes from 'prop-types';
import Tweets from '../tweets/Tweets';

function User({ img, username, bio, tweets }) {
  return (
    <main>
      <img src={img}/>
      <p>{username}</p>
      <p>{bio}</p>
      <Tweets tweets={tweets} />
    </main>
  );
}

User.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  tweets: PropTypes.array.isRequired
};

export default User;
