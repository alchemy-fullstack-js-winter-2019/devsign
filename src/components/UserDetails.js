import React from 'react';
import PropTypes from 'prop-types';

function UserDetails({ name, handle, profileImage, bannerImage, bio, location }) {
  return (
    <aside>
      <img name="bannerImage" src={bannerImage} />
      <img name="profileImage" src={profileImage} />
      <h2>{name} <span>{handle}</span></h2>
      <p>{bio}</p>
      {location && <p>{location}</p>}
    </aside>
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
