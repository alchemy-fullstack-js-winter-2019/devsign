import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProfileImg, Handle, MobileBio } from '../styles/mainStyle';

export const Aside = styled.aside `
  font-family: 'Prompt', sans-serif;
  width: 100%;
  background-color: white;
  border-bottom: #e2e2dc solid 2px;
  align-self: flex-start;

  @media (min-width: 700px) {
    width: 25%;
  }
`;

function UserDetails({ name, handle, profileImage, bio, location }) {
  return (
    <Aside>
      {/* <BannerImg name="bannerImage" src={bannerImage} /> */}
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
  // bannerImage: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default UserDetails;
