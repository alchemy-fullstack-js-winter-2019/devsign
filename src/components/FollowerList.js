import React from 'react';
import Follower from './Follower';
import PropTypes from 'prop-types';

export default function FollowerList({ followers }) {
  const listOfFollowers = followers.map(follower => {
    return <li key={follower._id}><Follower details={follower} /></li>;
  }); 
  return (
    <ul>
      {listOfFollowers}
    </ul>
  );
}

FollowerList.propTypes = {
  followers: PropTypes.array.isRequired
};
