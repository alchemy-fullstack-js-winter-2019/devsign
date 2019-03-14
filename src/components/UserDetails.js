import React from 'react';
import PropTypes from 'prop-types';
import { Aside, Bio } from '../styles/userDetails';
import { ProfileImg, Handle } from '../styles/mainStyle';

function UserDetails({ user }) {
  const { name, handle, profileImage, bio, location } = user;
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
  user: PropTypes.object.isRequired
};

export default UserDetails;
