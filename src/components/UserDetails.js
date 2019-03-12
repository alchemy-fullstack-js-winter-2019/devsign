import React from 'react';
import PropTypes from 'prop-types';
import { ProfileImg, MobileBanner, Handle, Aside, Bio } from '../styles/mainStyle';

function UserDetails({ name, handle, profileImage, bannerImage, bio, location }) {
  return (
    <Aside>
      <MobileBanner name="bannerImage" src={bannerImage} />
      <ProfileImg name="profileImage" src={profileImage} />
      <h2>{name} <Handle>{handle}</Handle></h2>
      <Bio>{bio}</Bio>
      {location && <Bio>{location}</Bio>}
    </Aside>
  );
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default UserDetails;
