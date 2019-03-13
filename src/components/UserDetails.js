import React from 'react';
import PropTypes from 'prop-types';
import { ProfileImg, BannerImg, Handle, Aside, MobileBio } from '../styles/mainStyle';

function UserDetails({ name, handle, profileImage, bannerImage, bio, location }) {
  return (
    <Aside>
      <BannerImg name="bannerImage" src={bannerImage} />
      <ProfileImg name="profileImage" src={profileImage} />
      <h2>{name} <Handle>{handle}</Handle></h2>
      <MobileBio>{bio}</MobileBio>
      {location && <MobileBio>{location}</MobileBio>}
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
