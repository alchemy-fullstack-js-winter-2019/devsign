import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

function Tweet({ tweet }) {
  const { text, user } = tweet;
  return (
    <>
   <User user={user} />
   <p>{text}</p>
    </>
  );
}
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
