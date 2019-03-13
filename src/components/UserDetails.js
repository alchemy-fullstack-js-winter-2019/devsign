import React from 'react';
import PropTypes from 'prop-types';
import { Aside, Bio } from '../styles/userDetails';
import { ProfileImg, Handle } from '../styles/mainStyle';

function UserDetails({ name, handle, profileImage, bio, location }) {
  return (
    <Aside>
      <ProfileImg name="profileImage" src={profileImage} />
      <h2>{name} <Handle>{handle}</Handle></h2>
      <Bio>{bio}</Bio>
      <Bio>{location}</Bio>
    </Aside>
  );
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default UserDetails;
